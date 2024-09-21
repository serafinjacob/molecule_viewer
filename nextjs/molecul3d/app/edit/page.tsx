"use client";
import React, { useEffect, useState } from "react";
import { Add as AddElement } from "@/components/Elements";
import { Elements } from "@/components/Elements";
import { Button } from "flowbite-react";
import { ImCross } from "react-icons/im";

interface ElementInterface {
  name: string;
  id: string;
}

export default function EditPage() {
  const [elements, setElements] = useState([] as ElementInterface[]);
  const [showAddElement, setShowAddElement] = useState(false);

  useEffect(() => {
    const storedElements = JSON.parse(localStorage.getItem("elements") || "[]");
    if (storedElements.length > 0) {
      setElements(storedElements);
    }
    const fetchElements = async () => {
      //update elements
      try {
        const res = await fetch("https://tgq0x7swce.execute-api.us-east-1.amazonaws.com/Prod/getElements", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
          },
        });
        const data = await res.json();

        if (res.ok) {
          const elements = [];
          for (const element_name in data.elements) {
            if (data.elements.hasOwnProperty(element_name)) {
              const element = data.elments[element_name];
              elements.push({
                name: element_name,
                id: element.element_id,
              });
            } else {
              console.log("Element name not found.");
            }
          }
          setElements(elements);
          // store elements in local storage
          localStorage.setItem("elements", JSON.stringify(elements));
        } else {
          console.log(data);
        }
      } catch (e) {
        console.log("Error getting elements.", e);
      }
    };

    fetchElements();
  }, []);

  return (
    <div className="relative m-5 p-5">
      {showAddElement ? (
        <>
          <Button onClick={() => setShowAddElement(false)} color="indigo" className="absolute right-0 top-0 m-5">
            <ImCross />
          </Button>
          <AddElement />
        </>
      ) : (
        <Elements elements={elements} showAddElement={setShowAddElement} />
      )}
    </div>
  );
}
