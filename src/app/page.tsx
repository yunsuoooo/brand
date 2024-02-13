import Link from "next/link";

import notionAPI from "@/lib/notion";
import { queryClient } from "@/lib/react-query";
import Item from "@/components/Item";

const NOTION_DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;

const HomePage = async () => {
  const posts = await getNotionPosts();

  return (
    <div className="flex flex-col w-fyll">
      <p className="w-full">YUNSU LIM</p>
      <div className="flex flex-col mt-4 p-4 border rounded w-fit">
        <p className="border-b font-bold">POST TITLES</p>
        {posts.map(({ id, title }) => (
          <Link href={`/post/${id}`} key={id}>
            {title}
          </Link>
        ))}
      </div>
      <Item />
    </div>
  );
};

export default HomePage;

const getNotionPosts = async () => {
  const posts = await notionAPI.getDatabase(NOTION_DATABASE_ID);

  queryClient.setQueryData(["posts"], posts);

  return posts;
};
