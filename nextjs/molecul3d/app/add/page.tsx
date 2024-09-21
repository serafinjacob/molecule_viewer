"use client";
import React, { useState } from "react";
import { FloatingLabel, Button, FileInput, Spinner } from "flowbite-react";

export default function AddPage() {
  const [file, setFile] = useState<File | null>(null);

  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      setFile(null);
      setError("Please select a file");
      setSuccess("");
      return;
    }
    // file must be selected, last 4 characters must be .sdf
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const ext = selectedFile.name.split(".").pop();
      if (ext === "sdf") {
        setFile(selectedFile);
        setError("");
      } else {
        setFile(null);
        setError("File type not supported. Please select a .sdf file");
        setSuccess("");
      }
    } else {
      setFile(null);
      setError("Please select a file");
      setSuccess("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (file && name && !name.includes(" ")) {
      const formData = new FormData();
      formData.append("name", name.toLowerCase());
      formData.append("file", file);
      setLoading(true);

      fetch("https://tgq0x7swce.execute-api.us-east-1.amazonaws.com/Prod/addMolecule", {
        method: "POST",
        credentials: "include",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }).then(async (res) => {
        try {
          const data = await res.json();

          if (res.ok) {
            console.log(data);
            setSuccess("File uploaded successfully");
            setError("");
          } else {
            console.log(data);
            setError(data.message || "Error uploading file");
            setSuccess("");
          }
          setLoading(false);
        } catch (e) {
          setError("Error uploading file");
          setSuccess("");
          setLoading(false);
          setFile(null);
        }
      });
    } else if (name.includes(" ")) {
      setError("Name cannot contain spaces");
      setSuccess("");
    } else if (!name) {
      setError("Please enter a molecule name");
      setSuccess("");
    } else {
      setError("Please select a valid sdf file");
      setSuccess("");
    }
  };

  return (
    <div className="w-full pl-20 pr-20 ">
      <form onSubmit={(e) => handleSubmit(e)} className="mt-5 flex flex-col items-center space-y-4 p-5">
        <h1 className="mb-1.5 text-4xl font-bold">Add Molecule</h1>
        <FloatingLabel
          label="Molecule Name"
          variant="filled"
          color="default"
          className="rounded-xl font-bold"
          onChange={(e) => setName(e.target.value.toLowerCase())}
        />
        <FileInput color="indigo" onChange={(e) => handleChange(e)} className="w-[80%]" />
        {error && <div className="text-rose-500">{error}</div>}
        {success && <div className="text-green-500">{success}</div>}
        <Button type="submit" color="indigo" className="rounded-xl px-10 py-2 font-bold ">
          {loading ? (
            <>
              <Spinner color="red" size="md" />
            </>
          ) : (
            <>Upload</>
          )}
        </Button>
      </form>
    </div>
  );
}
