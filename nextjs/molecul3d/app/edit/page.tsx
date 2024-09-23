"use client";
import React, { useState } from "react";

import ElementListView from "./components/elements-list-view";
import AddElement from "./components/add-element";
import EditElement from "./components/edit-element";
import Element from "@/components/Elements";

import { PageState } from "./types/page.type";

export default function Page() {
  const [show, setShow] = useState<PageState>("list");
  const [element, setElement] = useState<Element | null>(null);

  return (
    <div className="h-full w-full bg-gray-100 dark:bg-transparent rounded-xl p-10">
      {show === "list" && <ElementListView setShow={setShow} setElement={setElement} />}
      {show === "element" && <EditElement setShow={setShow} element={element} />}
      {show === "add" && <AddElement setShow={setShow} />}
    </div>
  );
}
