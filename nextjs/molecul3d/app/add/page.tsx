import React from "react";
import UploadForm from "./components/upload-form";

export default function Page() {
  return (
    <div className="h-full w-full bg-gray-100 dark:bg-transparent rounded-xl">
      <h1 className="text-4xl font-bold text-center pt-8">Add Molecule</h1>
      <UploadForm />
    </div>
  );
}
