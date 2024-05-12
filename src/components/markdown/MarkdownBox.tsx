import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownBox = ({ children }: { children: ReactNode }) => {
  return <ReactMarkdown>{String(children)}</ReactMarkdown>;
};

export default MarkdownBox;
