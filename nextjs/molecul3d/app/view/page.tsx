"use client";
import React, { useEffect, useState } from "react";

import ListViewPage from "./components/listview/view";
import Sliders from "./components/molecule/sliders";
import Molecule from "./components/molecule/view";

export default function ViewPage() {
  const [molecules, setMolecules] = useState([] as { name: string; id: string }[]);
  const [molecule, setMolecule] = useState(-1);

  const [showList, setShowList] = useState(true);
  const [name] = useState("");

  const [roll, setRoll] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [yaw, setYaw] = useState(0);

  useEffect(() => {
    const storedMolecules = JSON.parse(localStorage.getItem("molecules") || "[]");
    if (storedMolecules.length > 0) {
      setMolecules(storedMolecules);
    }
    const fetchMolecules = async () => {
      // check if molecules are stored in local storage
      try {
        const res = await fetch("https://tgq0x7swce.execute-api.us-east-1.amazonaws.com/Prod/getMolecules", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
          },
        });
        const data = await res.json();

        if (res.ok) {
          const moleculeArray = [] as { name: string; id: string }[];
          for (const moleculeName in data.molecules) {
            if (data.molecules.hasOwnProperty(moleculeName)) {
              const molecule = data.molecules[moleculeName];
              moleculeArray.push({
                name: moleculeName,
                id: molecule.molecule_id,
              });
            } else {
              console.log("Molecule name not found.");
            }
          }
          setMolecules(moleculeArray);
          // store molecules in local storage
          localStorage.setItem("molecules", JSON.stringify(moleculeArray));
        } else {
          console.log(data);
        }
      } catch (e) {
        console.log("Error getting molecules.", e);
      }
    };

    fetchMolecules();
  }, []);

  const handleSetMolecule = (id: string) => {
    setMolecule(parseInt(id));
    setShowList(false);
  };

  return (
    <div className="flex flex-col w-full h-full m-10 gap-10">
      {showList ? (
        <ListViewPage molecules={molecules} setMolecule={handleSetMolecule} />
      ) : (
        <>
          <h1 className="mb-1.5 mt-3 text-4xl font-bold">{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
          <div className="h-[calc(100%-140px)] w-full" id="molecule_svg">
            <Molecule molecule_id={molecule} roll={roll} pitch={pitch} yaw={yaw} />

            <Sliders roll={roll} pitch={pitch} yaw={yaw} setRoll={setRoll} setPitch={setPitch} setYaw={setYaw} />
            <button
              onClick={() => {
                setMolecule(-1);
                setShowList(true);
              }}
              className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Back
            </button>
          </div>
        </>
      )}
    </div>
  );
}
