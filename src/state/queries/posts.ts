import { useQuery } from "@tanstack/react-query";

import notionAPI from "@/lib/notion";

const NOTION_DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;

const usePosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      return await notionAPI.getDatabase(NOTION_DATABASE_ID);
    },
    enabled: false,
  });

export default usePosts;
