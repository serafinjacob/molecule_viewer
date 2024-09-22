import { PageState } from "../types/page.type";
import { Button } from "flowbite-react";
import { FloatingLabel } from "flowbite-react";
import Element from "@/components/Elements";

interface EditElementProps {
  setShow: (state: PageState) => void;
  elementId: number | null;
}

export default function EditElement({ setShow, elementId }: EditElementProps) {
  const testElement = new Element("Testing", "Te", 12, 10, "#34eb49", "#176e96", "#961728");

  const elements = [
    new Element("Hydrogen", "H", 1, 1, "#34eb49", "#176e96", "#961728"),
    new Element("Helium", "He", 2, 2, "#34eb49", "#176e96", "#961728"),
  ];

  const element = elements.find((element) => element.atomicNumber === elementId) || testElement;

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="mb-1.5 mt-3 text-4xl font-bold">Edit Element</h1>
        <form className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-row items-center justify-center">
            <div className="w-[35%] p-2">
              <FloatingLabel
                label="Name"
                type="text"
                variant="filled"
                color="default"
                className="rounded-xl"
                value={element.name}
                onChange={(e) => (element.name = e.target.value)}
              />

              <FloatingLabel
                label="Symbol"
                type="text"
                variant="filled"
                color="default"
                className="rounded-xl"
                value={element.symbol}
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
          <Button color="indigo" className="rounded-xl p-2" title="Edit Element">
            Save
          </Button>
        </form>

        <Button color="red" className="rounded-xl p-2" title="Delete Element">
          Delete
        </Button>
        <Button color="red" className="rounded-xl p-2" title="Cancel" onClick={() => setShow("list")}>
          Cancel
        </Button>
      </div>
    </>
  );
}
