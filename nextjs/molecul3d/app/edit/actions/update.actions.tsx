"use server";
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

export async function update({ name, symbol, atomicNumber, radius, color1, color2, color3 }: saveArgs) {
  const client = await sql.connect();

  await client.sql`BEGIN`;

  try {
    // if the element does not exist, return an error
    const result = await client.sql`SELECT * FROM elements WHERE element_no = ${atomicNumber} LIMIT 1`;

    if (result.rowCount === 0) {
      await client.sql`ROLLBACK`;
      client.release();
      throw new Error("404");
    }

    await client.sql`
	  UPDATE elements
	  SET element_name = ${name}, element_code = ${symbol}, element_no = ${atomicNumber}, radius = ${radius}, colour1 = ${color1}, colour2 = ${color2}, colour3 = ${color3}
	  WHERE element_no = ${atomicNumber}
	`;

    await client.sql`COMMIT`;
    client.release();

    return { success: "success" };
  } catch (e) {
    await client.sql`ROLLBACK`;
    client.release();
    return { error: "error " + e };
  }
}
