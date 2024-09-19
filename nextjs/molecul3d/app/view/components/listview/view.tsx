import React, { useEffect, useState } from "react";
import MoleculeList from "./list";
import Search from "./search";

export default function ListViewPage({ molecules, setMolecule }: { molecules: any; setMolecule: any }) {
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([] as ({ name: string; id: string } | any)[]);

  useEffect(() => {
    setResults(molecules);
  }, [molecules]);

  return (
    <>
      <div className="relative flex items-center justify-center py-4">
        <h1 className="mb-1.5 text-4xl font-bold">{searching ? "Search Results" : "Molecules"}</h1>
        <Search items={molecules} setResults={setResults} search_by="name" setSearching={setSearching} />

        {searching && <p className="items-center">No molecules found.</p>}
      </div>
      <MoleculeList molecules={results} setMolecule={setMolecule} />
    </>
  );
}
