import React, { useEffect, useState } from "react";
import { Molecule as mol } from "@/components/Molecule/Molecule";
import { SVG } from "@/components/SVG/SVG";
import { fetchMolecule } from "./view.actions";

interface MoleculeProps {
  molecule_id: number;
  yaw: number;
  pitch: number;
  roll: number;
}

export default function Molecule({ molecule_id, yaw, pitch, roll }: MoleculeProps) {
  const [svg, setSVG] = useState("");
  const [molecule, setMolecule] = useState<mol>();
  // create a molecule svg here
  // use yaw, pitch, roll to rotate the molecule

  useEffect(() => {
    fetchMolecule(String(molecule_id)).then((m) => {
      if (m) {
        setMolecule(m);
      } else {
        console.log("Error getting molecule.");
      }
    });
  }, [molecule_id]);

  useEffect(() => {
    if (!molecule) return;
    molecule.rotate(yaw, pitch, roll);
    setSVG(molecule.toSVG());
  }, [roll, pitch, yaw, molecule]);

  return <>{svg && <SVG svg={svg} />}</>;
}
