import { GoPlus } from "react-icons/go";
import Element from "@/components/Elements";
import ElementCard from "./element-card";
import { Button } from "flowbite-react";
import { PageState } from "../types/page.type";

interface ElementListViewProps {
  setShow: (state: PageState) => void;
  setElement: (element: Element) => void;
}

export default function ElementListView({ setShow, setElement }: ElementListViewProps) {
  const elements = [
    new Element("Hydrogen", "H", 1, 1, "#34eb49", "#176e96", "#961728"),
    new Element("Helium", "He", 2, 2, "#34eb49", "#176e96", "#961728"),
    new Element("Lithium", "Li", 3, 3, "#34eb49", "#176e96", "#745745"),
    new Element("Beryllium", "Be", 4, 4, "#34eb49", "#176e96", "#961728"),
    new Element("Boron", "B", 5, 5, "#34eb49", "#ab432c", "#171714"),
    new Element("Carbon", "C", 6, 6, "#34eb49", "#e54d32", "#472417"),
    new Element("Nitrogen", "N", 7, 7, "#34eb49", "#176e96", "#961728"),
    new Element("Oxygen", "O", 8, 8, "#34eb49", "#176e96", "#547547"),
  ];

  return (
    <div className="flex flex-col w-full justify-center ">
      <h1 className="mb-3 text-4xl font-bold text-center">Elements</h1>
      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-3 xs:grid-cols-2">
        {elements.map((element, index) => (
          <ElementCard key={index} element={element} setElement={setElement} setShow={setShow} />
        ))}

        <Button
          color="indigo"
          className="p-2 items-center h-1/3 w-1/3 justify-center my-auto"
          title="Add Element"
          onClick={() => setShow("add")}
        >
          <GoPlus className="text-4xl m-4" />
        </Button>
      </div>
    </div>
  );
}
