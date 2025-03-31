import { BlockquoteContentType } from "../../model/post-types";

export default function Blockquote({
  content,
  author,
  source,
}: BlockquoteContentType) {
  return (
    <blockquote className="my-8 border-l-4 border-gray-300 pl-4">
      <p className="text-gray-700">{content}</p>
      {(author || source) && (
        <footer className="mt-2 text-sm text-gray-600">
          {author && <span>{author}</span>}
          {author && source && <span> - </span>}
          {source && <span>{source}</span>}
        </footer>
      )}
    </blockquote>
  );
}
