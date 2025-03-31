import { PostContentType } from "../../model/post-types";
import Paragraph from "./paragraph";
import OrderedList from "./ordered-list";
import UnorderedList from "./unordered-list";
import Video from "./video";
import CodeBlock from "./code-block";
import Image from "./post-image";
import Blockquote from "./blockquote";
import Table from "./table";
import Divider from "./divider";

interface PostContentProps {
  content: PostContentType[];
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      {content.map((item) => {
        switch (item.type) {
          case "paragraph":
            return <Paragraph key={item.id} {...item} />;
          case "orderedList":
            return <OrderedList key={item.id} {...item} />;
          case "unorderedList":
            return <UnorderedList key={item.id} {...item} />;
          case "video":
            return <Video key={item.id} {...item} />;
          case "codeBlock":
            return <CodeBlock key={item.id} {...item} />;
          case "image":
            return <Image key={item.id} {...item} />;
          case "blockquote":
            return <Blockquote key={item.id} {...item} />;
          case "table":
            return <Table key={item.id} {...item} />;
          case "divider":
            return <Divider key={item.id} {...item} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
