import { useState } from "react";
import Element from "@/components/Elements";
import { FloatingLabel } from "flowbite-react";
import { Button } from "flowbite-react";
import { PageState } from "../types/page.type";

interface AddElementProps {
  setShow: (state: PageState) => void;
}

export default function AddElement({ setShow }: AddElementProps) {
  const [element] = useState<Element>(new Element("", "", 0, 0, "", "", ""));

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
              onChange={(e) => (element.atomicNumber = parseInt(e.target.value))}
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

      <Button color="red" className="rounded-xl p-2" title="Cancel" onClick={() => setShow("list")}>
        Cancel
      </Button>
    </div>
  );
}
