import { ParagraphContentType } from "../../model/post-types";

export default function Paragraph({ content }: ParagraphContentType) {
  return <p className="mb-4">{content}</p>;
}
