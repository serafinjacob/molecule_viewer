"use server";
import { sql } from "@vercel/postgres";

export async function getElements() {
  const client = await sql.connect();
  const result = await client.sql`SELECT * FROM elements ORDER BY element_no ASC`;

  client.release();

  // return as JSON
  return JSON.stringify(result.rows);
}
