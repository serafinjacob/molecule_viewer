import React, { useState } from "react";

import { Button, Card, FloatingLabel } from "flowbite-react";

import { CiRuler } from "react-icons/ci";
import { IoIosColorPalette } from "react-icons/io";
import { GoPlus } from "react-icons/go";

export class Element {
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
    color3: string,
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

export function Add() {
  const [element, setElement] = useState<Element>(
    new Element("", "", 0, 0, "", "", ""),
  );

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mb-1.5 mt-3 text-4xl font-bold">Add Element</h1>
      <form className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-row items-center justify-center">
          <div className="w-[35%] p-2">
            <FloatingLabel
              label="Name"
              type="text"
              variant="filled"
              color="default"
              className="rounded-xl"
              onChange={(e) => (element.name = e.target.value)}
            />

            <FloatingLabel
              label="Symbol"
              type="text"
              variant="filled"
              color="default"
              className="rounded-xl"
              onChange={(e) => (element.symbol = e.target.value)}
            />

            <FloatingLabel
              label="Atomic Number"
              type="number"
              variant="filled"
              color="default"
              className="rounded-xl"
              onChange={(e) =>
                (element.atomicNumber = parseInt(e.target.value))
              }
            />

            <FloatingLabel
              label="Radius"
              type="number"
              variant="filled"
              color="default"
              className="rounded-xl"
              onChange={(e) => (element.radius = parseInt(e.target.value))}
            />
          </div>
          <div className="w-[15%]">
            {/*<ColorSelector label="Colour 1" />
            <ColorSelector label="Colour 2" />
            <ColorSelector label="Colour 3" />*/}
          </div>
        </div>
        <Button color="indigo" className="rounded-xl p-2" title="Add Element">
          Add
        </Button>
      </form>
    </div>
  );
}

export function ElementCard({ element }: { element: Element }) {
  return (
    <Card className=" flex flex-col bg-gray-900 p-1.5 text-white hover:bg-gray-800 dark:bg-none">
      <h3 className="text-left text-xl" title="Atomic Number">
        {element.atomicNumber}
      </h3>
      <h1 className="mb-2 text-center text-6xl/10 font-bold " title="Symbol">
        {element.symbol.charAt(0).toUpperCase() + element.symbol.slice(1)}
      </h1>
      <h2 className="text-center text-2xl font-bold" title="Name">
        {element.name.charAt(0).toUpperCase() + element.name.slice(1)}
      </h2>
      <div className="flex flex-col">
        <div
          className="justify-left flex flex-row items-center pl-4 "
          title="Radius"
        >
          <CiRuler />
          {element.radius}
        </div>
        <div className="flex flex-row items-center justify-center">
          <IoIosColorPalette fill={`${element.color1}`} title="Colour 1" />
          <IoIosColorPalette fill={`${element.color2}`} title="Colour 2" />
          <IoIosColorPalette fill={`${element.color3}`} title="Colour 3" />
        </div>
      </div>
    </Card>
  );
}

export function Elements({
  elements,
  showAddElement,
}: {
  elements: Element[];
  showAddElement: (value: boolean) => void;
}) {
  const testElement = new Element(
    "Testing",
    "Te",
    12,
    10,
    "#34eb49",
    "#176e96",
    "#961728",
  );

  const setShowAddElement = (value: boolean) => {
    showAddElement(value);
  };

  return (
    <>
      <h1 className="mb-1.5 mt-3 text-4xl font-bold">Elements</h1>
      <div className="flex flex-row items-center justify-center space-x-2">
        <ElementCard element={testElement} />
        <ElementCard element={testElement} />
        {elements.map((element, index) => (
          <ElementCard key={index} element={element} />
        ))}
        <Button
          color="indigo"
          onClick={() => setShowAddElement(true)}
          className="p-2"
          title="Add Element"
        >
          <GoPlus className="text-4xl" />
        </Button>
      </div>
    </>
  );
}

export default Add;
