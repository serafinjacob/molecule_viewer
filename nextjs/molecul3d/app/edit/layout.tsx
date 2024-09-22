import HelpContainer from "@/components/HelpContainer";
import help from "./data/help.json";

// help.json has the sections and content for the help page, need to read this file and pass the data to the HelpContainer component

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <div className="md:max-w-xs max-w-lg order-2 md:order-1 m-auto">
        <HelpContainer sections={help.sections} />
      </div>
      <div className="w-full order-1 md:order-2">{children}</div>
    </div>
  );
}
