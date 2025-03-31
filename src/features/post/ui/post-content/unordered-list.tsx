import { UnorderedListContentType } from "../../model/post-types";

export default function UnorderedList({ items }: UnorderedListContentType) {
  return (
    <ul className="list-disc pl-6 mb-4">
      {items.map((item) => (
        <li key={item.id} className="mb-2">
          {item.content}
        </li>
      ))}
    </ul>
  );
}
