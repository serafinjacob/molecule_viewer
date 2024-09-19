export interface ReferenceProps {
  title: string;
  url: string;
}

export interface SectionProps {
  title: string;
  content: string | string[];
  references?: ReferenceProps[];
}

export interface HelpContainerProps {
  sections: SectionProps[];
}
