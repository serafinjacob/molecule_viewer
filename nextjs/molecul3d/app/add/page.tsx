import React from "react";
import UploadForm from "./components/upload-form";

export default function Page() {
  return (
    <div className="w-full pl-20 pr-20 ">
      <h1 className="text-4xl font-bold text-center pt-8">Add Molecule</h1>
      <UploadForm />
    </div>
  );
}
