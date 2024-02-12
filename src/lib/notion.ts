import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import type { PostView } from "@/types";

const NOTION_DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});

const getNotionPosts = async () => {
  const database = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
  });

  return database.results.map((page) => {
    const data = page as PageObjectResponse;

    const post = {
      id: data.id,
      createdAt: data.created_time,
    } as PostView;

    const titleProperty = data.properties["title"];
    const tagProperty = data.properties["tag"];

    if (titleProperty.type === "title") {
      post.title = titleProperty.title[0].plain_text;
    }

    if (tagProperty.type === "multi_select") {
      post.tags = tagProperty.multi_select;
    }

    return post;
  });
};

const notionAPI = { getPosts: getNotionPosts };

export default notionAPI;
