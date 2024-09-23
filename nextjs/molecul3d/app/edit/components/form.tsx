"use client";
import { PageState } from "../types/page.type";
import { FloatingLabel, Button } from "flowbite-react";
import Element from "@/components/Elements";
import { useState } from "react";

interface FormProps {
  element: Element | null;
  setShow: (state: PageState) => void;
}

export default function Form({ element, setShow }: FormProps) {
  const initialElement = useState<Element>(element || new Element("", "", 0, 0, "", "", ""))[0];

  return (
    <form className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="w-[35%] p-2">
          <FloatingLabel
            label="Name"
            type="text"
            variant="filled"
            color="default"
            className="rounded-xl"
            value={initialElement.name ? initialElement.name : ""}
            onChange={(e) => (initialElement.name = e.target.value)}
          />

          <FloatingLabel
            label="Symbol"
            type="text"
            variant="filled"
            color="default"
            className="rounded-xl"
            value={initialElement.symbol ? initialElement.symbol : ""}
            onChange={(e) => (initialElement.symbol = e.target.value)}
          />

          <FloatingLabel
            label="Atomic Number"
            type="number"
            variant="filled"
            color="default"
            className="rounded-xl"
            value={initialElement.atomicNumber ? initialElement.atomicNumber : 0}
            onChange={(e) => (initialElement.atomicNumber = parseInt(e.target.value))}
          />

          <FloatingLabel
            label="Radius"
            type="number"
            variant="filled"
            color="default"
            className="rounded-xl"
            value={initialElement.radius ? initialElement.radius : 0}
            onChange={(e) => (initialElement.radius = parseInt(e.target.value))}
          />
        </div>
        <div className="w-[15%]">
          {/*<ColorSelector label="Colour 1" />
			<ColorSelector label="Colour 2" />
			<ColorSelector label="Colour 3" />*/}
        </div>
      </div>
      <div className="flex flex-row w-full justify-center gap-4">
        <Button color="indigo" className="rounded-xl p-2" title="Edit Element">
          Save
        </Button>
        <Button color="red" className="rounded-xl p-2" title="Cancel" onClick={() => setShow("list")}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
