"use client";
import { PageState } from "../types/page.type";
import { FloatingLabel, Button, Alert } from "flowbite-react";
import Element from "@/components/Elements";
import { useState, useRef } from "react";

import SaveButton from "./add-button";

import { useFormState } from "react-dom";
import { upload } from "../actions/upload.action";

interface FormProps {
  element: Element | null;
  setShow: (state: PageState) => void;
}

export default function Form({ element, setShow }: FormProps) {
  const [updating] = useState(element ? true : false);

  const [initialElement, setInitialElement] = useState<Element>(
    element ? element : new Element("", "", 0, 0, "", "", "")
  );

  const [state, action] = useFormState(upload, undefined);

  const elementRef = useRef(initialElement);

  const updateElement = (e: React.ChangeEvent<HTMLInputElement>) => {
    elementRef.current = { ...elementRef.current, [e.target.name.split("-")[1]]: e.target.value };

    setInitialElement(elementRef.current);
  };

  return (
    <form className="flex w-full flex-col items-center" action={action}>
      <input type="hidden" name="element-form-name" value={updating ? "update" : "save"} />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="p-2 w-3/4 md:w-2/3">
          <FloatingLabel
            label="Name"
            type="text"
            variant="filled"
            color={state?.errors?.name ? "error" : "default"}
            className="rounded-xl"
            name="element-name"
            value={elementRef.current.name ? elementRef.current.name : ""}
            onChange={updateElement}
          />
          {state?.errors?.name && <p className="text-red-500 m-2">{state.errors.name}</p>}

          <FloatingLabel
            label="Symbol"
            type="text"
            variant="filled"
            color={state?.errors?.symbol ? "error" : "default"}
            className="rounded-xl"
            name="element-symbol"
            value={initialElement.symbol ? initialElement.symbol : ""}
            onChange={updateElement}
          />
          {state?.errors?.symbol && <p className="text-red-500 m-2">{state.errors.symbol}</p>}

          <FloatingLabel
            label="Atomic Number"
            type="number"
            variant="filled"
            readOnly={updating}
            color={state?.errors?.atomicNumber ? "error" : "default"}
            className="rounded-xl"
            name="element-atomicNumber"
            value={initialElement.atomicNumber ? initialElement.atomicNumber : 0}
            onChange={updateElement}
          />

          {updating ? (
            <Alert color="warning" className="m-2">
              <span className="text-xs cursor-default">Atomic number can not be changed when updating an element.</span>
            </Alert>
          ) : null}
          {state?.errors?.atomicNumber && <p className="text-red-500 m-2">{state.errors.atomicNumber}</p>}

          <FloatingLabel
            label="Radius"
            type="number"
            variant="filled"
            color={state?.errors?.radius ? "error" : "default"}
            className="rounded-xl"
            name="element-radius"
            value={initialElement.radius ? initialElement.radius : 0}
            onChange={updateElement}
          />
          {state?.errors?.radius && <p className="text-red-500 m-2">{state.errors.radius}</p>}
        </div>

        <div className="md:grid md:grid-cols-3 gap-4 flex flex-col w-1/2">
          <FloatingLabel
            label="Color 1"
            type="color"
            color={state?.errors?.color1 ? "error" : "default"}
            variant="filled"
            className="rounded-xl h-12 mb-[-26px] cursor-pointer"
            name="element-color1"
            value={initialElement.color1 ? initialElement.color1 : ""}
            onChange={updateElement}
          />
          {state?.errors?.color1 && <p className="text-red-500 m-2">{state.errors.color1}</p>}

          <FloatingLabel
            label="Color 2"
            type="color"
            color={state?.errors?.color2 ? "error" : "default"}
            variant="filled"
            className="rounded-xl h-12 mb-[-26px] cursor-pointer"
            name="element-color2"
            value={initialElement.color2 ? initialElement.color2 : ""}
            onChange={updateElement}
          />
          {state?.errors?.color2 && <p className="text-red-500 m-2">{state.errors.color2}</p>}

          <FloatingLabel
            label="Color 3"
            type="color"
            variant="filled"
            color={state?.errors?.color3 ? "error" : "default"}
            className="rounded-xl h-12 mb-[-16px] cursor-pointer"
            name="element-color3"
            value={initialElement.color3 ? initialElement.color3 : ""}
            onChange={updateElement}
          />
          {state?.errors?.color3 && <p className="text-red-500 m-2">{state.errors.color3}</p>}
        </div>
        {state?.success && <p className="text-green-500 m-2">{state.success}</p>}
        {state?.errors?.save && <p className="text-red-500 m-2">{state.errors.save}</p>}
      </div>
      <div className="flex flex-row w-full justify-center gap-4">
        <SaveButton />
        <Button
          color="red"
          className="rounded-xl p-2 bg-transparent border-2 "
          title="Cancel"
          onClick={() => setShow("list")}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
