import { GoPlus } from "react-icons/go";
import Element from "@/components/Elements";
import { Card } from "flowbite-react";
import ElementCard from "./element-card";
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
    <div className="flex flex-col w-full justify-center">
      <h1 className="text-4xl font-bold text-center">Elements</h1>
      <div className="pt-3 w-full h-full">
        <div className="grid gap-8 pt-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {elements.map((element, index) => (
            <ElementCard key={index} element={element} setElement={setElement} setShow={setShow} />
          ))}
          <Card
            className="flex flex-col flex-grow min-w-fit cursor-pointer border-2 shadow-lg dark:bg-transparent bg-transparent dark:border-indigo-900 border-indigo-500 dark:hover:bg-indigo-800 hover:bg-indigo-200"
            title="Create Element"
            onClick={() => setShow("add")}
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-3xl font-bold text-center">Create Element</h1>
              <GoPlus className="text-5xl" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
