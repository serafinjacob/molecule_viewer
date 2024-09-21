"use client";
import React, { useState, useEffect } from "react";
import { FloatingLabel } from "flowbite-react";

export interface Item {
  [key: string]: string | number;
  name: string;
  id: string;
}

interface SearchProps {
  items: Item[];
  search_by: string;
  setResults: (results: Item[]) => void;
  setSearching: (searching: boolean) => void;
}

export default function Search({ items, search_by, setResults, setSearching }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm === "") {
      setResults(items);
    } else {
      setSearching(true);
      const filteredItems = items.filter((item) => {
        return item[search_by].toString().toLowerCase().includes(searchTerm.toLowerCase());
      });
      setResults(filteredItems);
    }
    setSearching(false);
  }, [searchTerm, items, search_by, setResults, setSearching]);
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
