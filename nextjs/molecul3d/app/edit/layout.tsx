import HelpContainer from "@/components/HelpContainer";
import help from "./data/help.json";

// help.json has the sections and content for the help page, need to read this file and pass the data to the HelpContainer component

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row w-full h-full m-10 mb-auto gap-10">
      <div className="md:max-w-xs order-2 md:order-1 justify-end md:justify-start">
        <HelpContainer sections={help.sections} />
      </div>
      <div className="flex flex-grow mb-auto w-full h-full order-1 md:order-2 ">{children}</div>
    </div>
  );
}
