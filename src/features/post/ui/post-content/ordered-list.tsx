import { OrderedListContentType } from "../../model/post-types";

export default function OrderedList({ items }: OrderedListContentType) {
  return (
    <ol className="list-decimal pl-6 mb-4">
      {items.map((item) => (
        <li key={item.id} className="mb-2">
          {item.content}
        </li>
      ))}
    </ol>
  );
}
