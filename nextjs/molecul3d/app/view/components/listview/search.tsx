"use client";
import React, { use, useState, useEffect } from "react";
import { FloatingLabel } from "flowbite-react";

interface SearchProps {
  items: any[];
  search_by: string;
  setResults: any;
  setSearching: any;
}

export default function Search({ items, search_by, setResults, setSearching }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm === "") {
      setResults(items);
    } else {
      setSearching(true);
      const filteredItems = items.filter((item) => item[search_by].toLowerCase().includes(searchTerm.toLowerCase()));
      setResults(filteredItems);
    }
    setSearching(false);
  }, [searchTerm]);

  return (
    <div className="absolute right-0">
      <FloatingLabel
        label="Search"
        variant="filled"
        color="default"
        className="rounded-xl font-bold"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
