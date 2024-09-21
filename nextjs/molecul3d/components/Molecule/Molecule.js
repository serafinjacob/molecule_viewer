// molecule has atoms and bonds

//atoms have element, x, y, and z

//bonds have atom1, atom2, and epairs, x1, y1, x2, y2, len, dx, dy

const radius = {};

const element_name = {};

//const header =
//'<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000">\n';
//const footer = `</svg>`;

const offsetx = 500;
const offsety = 500;

export class Parser {
  constructor() {}

  parse(data) {
    const items = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].type === "atom") {
        items.push(new Atom(data[i].element, data[i].x, data[i].y, data[i].z));
      } else if (data[i].type === "bond") {
        items.push(
          new Bond(
            data[i].a1,
            data[i].a2,
            data[i].epairs,
            data[i].x1,
            data[i].y1,
            data[i].x2,
            data[i].y2,
            data[i].len,
            data[i].dx,
            data[i].dy
          )
        );
      }
    }
    return new Molecule(items);
  }
}

export class Molecule {
  constructor(items) {
    this.items = items;
  }

  toSVG() {
    // for each item call its svg method
    const svg = [];
    for (let i = 0; i < this.items.length; i++) {
      svg.push(this.items[i].toSVG());
    }
    return svg.join("");
  }

  rotate(roll, pitch, yaw) {
    const cos_roll = Math.cos(roll);
    const sin_roll = Math.sin(roll);
    const cos_pitch = Math.cos(pitch);
    const sin_pitch = Math.sin(pitch);
    const cos_yaw = Math.cos(yaw);
    const sin_yaw = Math.sin(yaw);

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] instanceof Atom) {
        const x = this.items[i].x;
        const y = this.items[i].y;

        this.items[i].x =
          cos_yaw * cos_pitch * x +
          cos_yaw * sin_pitch * sin_roll * y +
          sin_yaw * sin_roll * x -
          sin_yaw * cos_roll * y;
        this.items[i].y = sin_pitch * x - cos_pitch * sin_roll * y;
        this.items[i].z =
          -sin_yaw * cos_pitch * x -
          sin_yaw * sin_pitch * sin_roll * y +
          cos_yaw * sin_roll * x +
          cos_yaw * cos_roll * y;
      } else if (this.items[i] instanceof Bond) {
        const x1 = this.items[i].x1;
        const y1 = this.items[i].y1;
        const x2 = this.items[i].x2;
        const y2 = this.items[i].y2;

        this.items[i].x1 =
          cos_yaw * cos_pitch * x1 +
          cos_yaw * sin_pitch * sin_roll * y1 +
          sin_yaw * sin_roll * x1 -
          sin_yaw * cos_roll * y1;
        this.items[i].y1 = sin_pitch * x1 - cos_pitch * sin_roll * y1;
        this.items[i].x2 =
          cos_yaw * cos_pitch * x2 +
          cos_yaw * sin_pitch * sin_roll * y2 +
          sin_yaw * sin_roll * x2 -
          sin_yaw * cos_roll * y2;
        this.items[i].y2 = sin_pitch * x2 - cos_pitch * sin_roll * y2;
      }
    }
  }
}

export class Atom {
  constructor(element, x, y, z) {
    this.element = element;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  toSVG() {
    if (this.element in radius && this.element in element_name) {
      return `  <circle cx="${this.x * 100.0 + offsetx}" cy="${this.y * 100.0 + offsety}" r="${
        radius[this.element]
      }" fill="url(#${element_name[this.element]})"/>\n`;
    } else {
      return `  <circle cx="${this.x * 100.0 + offsetx}" cy="${this.y * 100.0 + offsety}" r="30" fill="aqua"/>\n`;
    }
  }
}

export class Bond {
  constructor(atom1, atom2, epairs, x1, y1, x2, y2, len, dx, dy) {
    this.atom1 = atom1;
    this.atom2 = atom2;
    this.epairs = epairs;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.len = len;
    this.dx = dx;
    this.dy = dy;
  }

  toSVG() {
    return `  <polygon points="
						${this.x1 * 100.0 + offsetx - 10 * this.dy},
						${this.y1 * 100.0 + offsety + 10 * this.dx},
						${this.x1 * 100.0 + offsetx + 10 * this.dy},
						${this.y1 * 100.0 + offsety - 10 * this.dx},
						${this.x2 * 100.0 + offsetx + 10 * this.dy},
						${this.y2 * 100.0 + offsety - 10 * this.dx},
						${this.x2 * 100.0 + offsetx - 10 * this.dy},
						${this.y2 * 100.0 + offsety + 10 * this.dx}" 
					fill="green"/>\n`;
  }
}

export default {
  Parser,
  Molecule,
  Atom,
  Bond,
};
