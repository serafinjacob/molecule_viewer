import MoleculeCard from "./card";

interface MoleculeListProps {
  molecules: { name: string; id: string }[];
  setMolecule: (id: string) => void;
}

export default function MoleculeList({ molecules, setMolecule }: MoleculeListProps) {
  return (
    <>
      {molecules.length === 0 && <p className="items-center">No molecules found.</p>}
      {molecules.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {molecules.map((molecule, index) => (
            <MoleculeCard key={index} molecule={molecule} setMolecule={setMolecule} index={index} />
          ))}
        </div>
      )}
    </>
  );
}
