"server only";

export async function parse(file: File) {
  const data = await file.text();
  console.log(data);

  const lines = data.split("\n");

  // first two numbers encountered on line three is the number of atoms and bonds
  const [numAtoms, numBonds] = lines[3]
    .trim()
    .split(/\s+/)
    .map((n) => parseInt(n));

  if (isNaN(numAtoms) || isNaN(numBonds)) {
    throw new Error("Number of atoms and bonds not found correctly.");
  }

  const atoms = [];
  const bonds = [];

  for (let i = 4; i < numAtoms + 4; i++) {
    const [x, y, z, symbol] = lines[i].trim().split(/\s+/);

    if (isNaN(parseFloat(x)) || isNaN(parseFloat(y)) || isNaN(parseFloat(z))) {
      throw new Error("Error parsing x, y, z coordinates and symbol");
    }

    atoms.push({
      x: parseFloat(x),
      y: parseFloat(y),
      z: parseFloat(z),
      symbol,
    });
  }

  for (let i = numAtoms + 4; i < numAtoms + numBonds + 4; i++) {
    const [from, to, num_bonds] = lines[i].trim().split(/\s+/);

    if (isNaN(parseInt(from)) || isNaN(parseInt(to)) || isNaN(parseInt(num_bonds))) {
      throw new Error("Error parsing from, to, and num_bonds");
    }

    bonds.push({
      from: parseInt(from),
      to: parseInt(to),
      num_bonds: parseInt(num_bonds),
    });
  }

  if (atoms.length !== numAtoms || bonds.length !== numBonds) {
    throw new Error("Error parsing atoms and bonds");
  }

  return { atoms, bonds };
}
