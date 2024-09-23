import { Button } from "flowbite-react";
import { FaArrowRight } from "react-icons/fa";
import type { CustomFlowbiteTheme } from "flowbite-react";

export default function Home() {
  return (
    <div className="flex flex-grow flex-col items-center justify-start justify-items-center w-full h-full mx-auto cursor-default select-none">
      <section className="h-fit w-full">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="m-auto place-self-center lg:col-span-7 text-center lg:text-left">
            <h1 className="mb-4 max-w-2xl font-extrabold leading-none tracking-tight dark:text-white text-5xl xl:text-6xl">
              Mol3D
            </h1>
            <p className="mb-6 max-w-2xl text-gray-500 dark:text-gray-400 text-lg lg:mb-8 lg:text-xl">
              Explore and customize 3D molecules with Mol3D — upload, view, and edit molecular structures effortlessly!
            </p>
            <div className="flex w-fit items-center gap-5 m-auto lg:m-0">
              <Button
                href="/view"
                outline
                size="lg"
                color="purple"
                theme={customTheme}
                className="[&>span]:items-center"
              >
                View Molecules
                <FaArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">..Image goes here..</div>
        </div>
      </section>

      <main className="p-8 flex flex-col gap-8 items-center sm:items-start text-center max-w-4xl md:max-w-4xl w-full h-full">
        <p className="w-full m-auto">
          This is a simple web application that allows you to view molecules in 3D. You can upload your own molecules or
          view the ones that are already in the database. Additionally, you can modify your view of a molecule by
          editing the properties of the elements that make up the molecule.
        </p>
        <p className="w-full m-auto">
          To get started, click on the &quot;Upload&quot; tab above and upload a molecule file. Files must be valid .sdf
          files. All molecules succesfully added to the system can be viewed by clicking on the &quot;Display&quot; tab.
          You can change element properties by clicking on the &quot;Edit&quot; tab.
        </p>
      </main>
    </div>
  );
}

const customTheme: CustomFlowbiteTheme["button"] = {
  base: "rounded-xl font-bold",
  color: {
    purple:
      "border border-transparent bg-purple-700 text-white focus:ring-4 focus:ring-purple-300 enabled:hover:bg-purple-800 dark:bg-purple-600 dark:focus:ring-purple-900 dark:enabled:hover:bg-purple-700",
  },
  size: {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  },
  outline: {
    color: {
      purple: "bg-transparent dark:text-white ring-2 ring-purple-600 hover:ring-purple-500 hover:ring-[3px] ",
    },
    off: "",
    on: "flex w-full justify-center text-gray-900 transition-all duration-75 ease-in dark:text-white",
    pill: {
      off: "rounded-md",
      on: "rounded-xl",
    },
  },
};
