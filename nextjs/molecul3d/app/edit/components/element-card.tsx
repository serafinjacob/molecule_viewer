import Element from "@/components/Elements";
import { Card } from "flowbite-react";
import { IoIosColorPalette } from "react-icons/io";
import { CiRuler } from "react-icons/ci";
import { PageState } from "../types/page.type";

interface ElementCardProps {
  element: Element;
  setElementId: (id: number) => void;
  setShow: (state: PageState) => void;
}

export default function ElementCard({ element, setElementId, setShow }: ElementCardProps) {
  return (
    <Card
      className="flex flex-col p-1.5 cursor-pointer shadow-lg border-none dark:bg-slate-800 bg-slate-300 dark:hover:bg-slate-700 hover:bg-slate-400"
      onClick={() => {
        setElementId(element.atomicNumber);
        setShow("element");
      }}
    >
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
        <div className="justify-center flex flex-row items-center pr-1 " title="Radius">
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
