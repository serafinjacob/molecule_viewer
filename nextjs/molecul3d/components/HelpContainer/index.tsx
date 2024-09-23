"use client";
import { useState } from "react";
import { TbHelp } from "react-icons/tb";
import { HelpContainerProps, ReferenceProps, SectionProps } from "./types";

export default function HelpContainer({ sections }: HelpContainerProps) {
  const [show, setShow] = useState(false);
  return (
    <div className={`relative p-4 ${show ? "rounded-xl bg-gray-100 dark:bg-gray-700 " : ""}`}>
      <div className={`absolute text-gray-400 ${show ? "right-4" : "left-0"}`}>
        <TbHelp className="text-3xl cursor-pointer" onClick={() => setShow(!show)} />
      </div>

      <div className="flex flex-col gap-4"> {show && <Help sections={sections} />}</div>
    </div>
  );
}

function Content({ content, references }: { content: string | string[]; references?: ReferenceProps[] }) {
  // for each item in content.references, replace string instances of {*Ref:<title>} with <a href> to the reference url with the title as the text
  const replaceReferences = (content: string, references?: ReferenceProps[]) => {
    if (!references) return content;

    let replacedContent = content;

    references.forEach((ref) => {
      replacedContent = replacedContent.replace(
        `{*Ref:${ref.title}}`,
        `<a href=${ref.url} class="text-blue-500" rel="noopener noreferrer">${ref.title}</a>`
      );
    });

    return replacedContent;
  };

  return (
    <div>
      {Array.isArray(content)
        ? content.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: replaceReferences(item, references) }} />
          ))
        : typeof content === "string" && (
            <p dangerouslySetInnerHTML={{ __html: replaceReferences(content, references) }} />
          )}
    </div>
  );
}

function Help({ sections }: { sections: SectionProps[] }) {
  return (
    <>
      {sections.map((section, index) => (
        <div key={index}>
          <h2 className="text-xl font-bold">{section.title}</h2>
          <Content content={section.content} references={section.references} />
        </div>
      ))}
    </>
  );
}
