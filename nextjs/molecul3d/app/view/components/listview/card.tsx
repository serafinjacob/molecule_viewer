import React from "react";
import { Card } from "flowbite-react";

interface MoleculeCardProps {
  molecule: { name: string; id: string };
  setMolecule: (id: string) => void;
  index: number;
}

export default function MoleculeCard({ molecule, setMolecule, index }: MoleculeCardProps) {
  return (
    <Card
      onClick={() => setMolecule(molecule.id)}
      key={index}
      className="flex cursor-pointer flex-col items-center justify-center bg-gray-900 hover:bg-gray-800 dark:bg-none"
    >
      <h2 className="m-4 text-2xl font-bold">{molecule.name.charAt(0).toUpperCase() + molecule.name.slice(1)}</h2>
    </Card>
  );
}
