import { PageState } from "../types/page.type";

import Form from "./form";
import Element from "@/components/Elements";

interface EditElementProps {
  setShow: (state: PageState) => void;
  element: Element | null;
}

export default function EditElement({ setShow, element }: EditElementProps) {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="pb-3 text-4xl font-bold">Edit Element</h1>
        <Form element={element} setShow={setShow} />
      </div>
    </>
  );
}
