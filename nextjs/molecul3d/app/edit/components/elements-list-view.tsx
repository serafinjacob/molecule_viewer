import { ElementListViewProps } from "../types/page.type";

import Element from "@/components/Elements";
import ElementCard from "./element-card";
import CreateButton from "./create-button";

import { getElements } from "../actions/fetch.action";

export default function ElementListView({ setShow, setElement }: ElementListViewProps) {
  // create the elements array
  let elements: Element[] = [];

  return (
    <div className="flex flex-col w-full justify-center">
      <h1 className="text-4xl font-bold text-center">Elements</h1>
      <div className="pt-3 w-full h-full">
        <div className="grid gap-8 pt-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {elements.map((element: Element, index: number) => (
            <ElementCard key={index} element={element} setElement={setElement} setShow={setShow} />
          ))}

          <CreateButton setShow={setShow} />
        </div>
      </div>
    </div>
  );
}
