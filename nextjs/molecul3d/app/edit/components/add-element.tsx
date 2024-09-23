import { useState } from "react";
import Element from "@/components/Elements";
import { PageState } from "../types/page.type";
import Form from "./form";

interface AddElementProps {
  setShow: (state: PageState) => void;
}

export default function AddElement({ setShow }: AddElementProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="pb-3 text-4xl font-bold">Add Element</h1>
      <Form element={null} setShow={setShow} />
    </div>
  );
}
