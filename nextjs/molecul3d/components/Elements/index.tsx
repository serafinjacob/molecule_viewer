export default class Element {
  name: string;
  symbol: string;
  atomicNumber: number;
  radius: number;
  color1: string;
  color2: string;
  color3: string;

  constructor(
    name: string,
    symbol: string,
    atomicNumber: number,
    radius: number,
    color1: string,
    color2: string,
    color3: string
  ) {
    this.name = name;
    this.symbol = symbol;
    this.atomicNumber = atomicNumber;
    this.radius = radius;
    this.color1 = color1;
    this.color2 = color2;
    this.color3 = color3;
  }
}
