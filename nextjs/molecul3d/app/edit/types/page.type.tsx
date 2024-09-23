import Element from "@/components/Elements";

export type PageState = "list" | "element" | "add";

export interface ElementProps {
  element: Element;
}

export interface ElementListViewProps {
  setShow: (state: PageState) => void;
  setElement: (element: Element) => void;
}
