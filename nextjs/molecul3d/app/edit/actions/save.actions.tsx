"server only";
import { sql } from "@vercel/postgres";

interface saveArgs {
  name: string;
  symbol: string;
  atomicNumber: number;
  radius: number;
  color1: string;
  color2: string;
  color3: string;
}

export async function save({ name, symbol, atomicNumber, radius, color1, color2, color3 }: saveArgs) {
  // create a single client for all queries in the transaction
  const client = await sql.connect();

  await client.sql`BEGIN`;

  try {
    await client.sql`
	  INSERT INTO elements (element_name, element_code, element_no, radius, colour1, colour2, colour3)
	  VALUES (${name}, ${symbol}, ${atomicNumber}, ${radius}, ${color1}, ${color2}, ${color3})
	`.catch((e) => {
      throw e;
    });

    await client.sql`COMMIT`;
    client.release();

    return { success: "Element saved. " };
  } catch (e) {
    await client.sql`ROLLBACK`;
    client.release();
    return { error: "Save Failed. " + e };
  }
}
