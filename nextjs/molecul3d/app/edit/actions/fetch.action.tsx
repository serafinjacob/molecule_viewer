"use server";
import { sql } from "@vercel/postgres";
import Element from "@/components/Elements";

export async function getElements() {
  const client = await sql.connect();
  const result = await client.sql`SELECT * FROM elements ORDER BY element_no ASC`;

  client.release();

  // create the elements array
  const elements: Element[] = [];

  // loop through the rows and create the elements
  for (const row of result.rows) {
    elements.push(
      new Element(row.element_name, row.element_code, row.element_no, row.radius, row.colour1, row.colour2, row.colour3)
    );
  }

  return elements;
}
