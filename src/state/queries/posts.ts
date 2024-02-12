import { useQuery } from "@tanstack/react-query";

import notionAPI from "@/lib/notion";

const usePosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      return await notionAPI.getPosts();
    },
    enabled: false,
  });

export default usePosts;
