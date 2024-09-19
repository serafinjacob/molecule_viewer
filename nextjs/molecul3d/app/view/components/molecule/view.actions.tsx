import { Parser } from "@/components/Molecule/Molecule";

export const fetchMolecule = async (id: string) => {
  try {
    const res = await fetch(
      "https://tgq0x7swce.execute-api.us-east-1.amazonaws.com/Prod/getMolecule?molecule_id=" + id,
      {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      }
    );
    const data = await res.json();

    if (res.ok) {
      const parser = new Parser();
      const molecule = parser.parse(data.molecule);

      return molecule;
    } else {
      console.log(data);
    }
  } catch (e) {
    console.log("Error getting molecule.", e);
  }
};
