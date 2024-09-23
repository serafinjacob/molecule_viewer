import { GoPlus } from "react-icons/go";
import { Card } from "flowbite-react";
import { PageState } from "../types/page.type";

export default function CreateButton({ setShow }: { setShow: (state: PageState) => void }) {
  return (
    <Card
      className="flex flex-col flex-grow min-w-fit cursor-pointer border-2 shadow-lg dark:bg-transparent bg-transparent dark:border-indigo-900 border-indigo-500 dark:hover:bg-indigo-800 hover:bg-indigo-200"
      title="Create Element"
      onClick={() => setShow("add")}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-bold text-center">Create Element</h1>
        <GoPlus className="text-5xl" />
      </div>
    </Card>
  );
}
