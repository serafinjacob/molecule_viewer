"use client";
import { FloatingLabel, FileInput } from "flowbite-react";
import { useFormState } from "react-dom";

import { upload } from "../actions/upload.action";
import UploadButton from "./upload-button";

export default function UploadForm() {
  const [state, action] = useFormState(upload, undefined);

  return (
    <form className="flex flex-col h-full w-full items-center space-y-4 p-5" action={action}>
      <FloatingLabel
        label="Molecule Name"
        variant="filled"
        color={state?.errors?.name ? "error" : "default"}
        className="rounded-xl font-bold"
        name="mol-name"
      />
      {state?.errors?.name && <p className="text-red-500">{state.errors.name}</p>}

      <FileInput
        color={state?.errors?.file ? "failure" : "gray"}
        className="w-[80%] dark:bg-slate-800"
        sizing="lg"
        name="mol-file"
      />
      {state?.errors?.file && <p className="text-red-500">{state.errors.file}</p>}

      <UploadButton />
    </form>
  );
}
