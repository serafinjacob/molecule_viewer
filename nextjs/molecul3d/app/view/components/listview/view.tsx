import React, { useEffect, useState } from "react";
import MoleculeList from "./list";
import Search from "./search";

interface ListViewPageProps {
  molecules: { name: string; id: string }[];
  setMolecule: (id: string) => void;
}

export default function ListViewPage({ molecules, setMolecule }: ListViewPageProps) {
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([] as { name: string; id: string }[]);

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
