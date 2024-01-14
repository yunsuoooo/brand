import notion from "@/hooks/notion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notionDatabaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;

type NotionSelectColor =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red";
type PostTag = {
  id: string;
  name: string;
  color: NotionSelectColor;
};
type PostView = {
  id: string;
  createdAt: string;
  title: string;
  cover: string;
  tags: Array<PostTag>;
};

export async function getPosts() {
  const database = await notion.databases.query({
    database_id: notionDatabaseId,
  });

  const posts = database.results.map((page) => {
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

  return posts;
}
