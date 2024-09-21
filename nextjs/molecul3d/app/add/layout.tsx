import HelpContainer from "@/components/HelpContainer";
import help from "./data/help.json";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <div className="md:max-w-xs order-2 md:order-1 justify-end md:justify-start w-full">
        <HelpContainer sections={help.sections} />
      </div>
      <div className="w-full order-1 md:order-2">{children}</div>
    </div>
  );
}
