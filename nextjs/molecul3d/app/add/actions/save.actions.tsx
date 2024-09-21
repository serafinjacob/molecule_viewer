"server only";
import { sql } from "@vercel/postgres";

interface saveArgs {
  name: string;
  atoms: { x: number; y: number; z: number; symbol: string }[];
  bonds: { from: number; to: number; num_bonds: number }[];
}

export async function save({ name, atoms, bonds }: saveArgs) {
  // create a single client for all queries in the transaction
  const client = await sql.connect();

  await client.sql`BEGIN`;

  try {
    const molecule_insert_result =
      await client.sql`INSERT INTO molecules (name) VALUES (${name}) RETURNING molecule_id`;
    const molecule_id = molecule_insert_result.rows[0].molecule_id;

    // store atoms
    await Promise.all(
      atoms.map(async (atom) => {
        const atom_insert_result = await client.sql` INSERT INTO atoms (element_code, x, y, z)
		VALUES (${atom.symbol}, ${atom.x}, ${atom.y}, ${atom.z}) RETURNING atom_id`;

        const atom_id = atom_insert_result.rows[0].atom_id;

        await client.sql`INSERT INTO moleculeatom (molecule_id, atom_id) VALUES (${molecule_id}, ${atom_id})`;
      })
    );

    // store bonds
    await Promise.all(
      bonds.map(async (bond) => {
        const bond_insert_result = await client.sql`INSERT INTO bonds (a1, a2, epairs)
		VALUES (${bond.from}, ${bond.to}, ${bond.num_bonds}) RETURNING bond_id`;

        const bond_id = bond_insert_result.rows[0].bond_id;

        await client.sql`INSERT INTO moleculebond (molecule_id, bond_id) VALUES (${molecule_id}, ${bond_id})`;
      })
    );

    await client.sql`COMMIT`;
    client.release();
    return { success: "Molecule saved. " };
  } catch (e) {
    await client.sql`ROLLBACK`;
    client.release();
    return { error: "Upload Failed. " };
  }
}
