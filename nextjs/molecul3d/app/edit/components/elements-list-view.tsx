import { ElementListViewProps } from "../types/page.type";

import Element from "@/components/Elements";
import ElementCard from "./element-card";
import CreateButton from "./create-button";

import { useEffect, useState } from "react";

import { getElements } from "../actions/fetch.action";

interface ElementReturn {
  element_name: string;
  element_code: string;
  element_no: number;
  radius: number;
  colour1: string;
  colour2: string;
  colour3: string;
}

export default function ElementListView({ setShow, setElement }: ElementListViewProps) {
  // create the elements array
  const [elements, setElements] = useState<Element[]>([]);

  useEffect(() => {
    getElements().then((data) => {
      const json = JSON.parse(data);

      setElements(
        json.map((element: ElementReturn) => {
          return new Element(
            element.element_name,
            element.element_code,
            element.element_no,
            element.radius,
            element.colour1.charAt(0) === "#" ? element.colour1 : "#" + element.colour1,
            element.colour2.charAt(0) === "#" ? element.colour2 : "#" + element.colour2,
            element.colour3.charAt(0) === "#" ? element.colour3 : "#" + element.colour3
          );
        })
      );
    });
  }, []);

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
