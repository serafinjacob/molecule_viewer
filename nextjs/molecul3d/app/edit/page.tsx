"use client";
import React, { useState } from "react";

import ElementListView from "./components/elements-list-view";
import AddElement from "./components/add-element";
import EditElement from "./components/edit-element";

import { PageState } from "./types/page.type";

export default function Page() {
  const [show, setShow] = useState<PageState>("list");
  const [elementId, setElementId] = useState<number | null>(null);

  return (
    <div className="flex flex-col m-5 p-5 justify-center">
      {show === "list" && <ElementListView setShow={setShow} setElementId={setElementId} />}
      {show === "element" && <EditElement setShow={setShow} elementId={elementId} />}
      {show === "add" && <AddElement setShow={setShow} />}
    </div>
  );
}
