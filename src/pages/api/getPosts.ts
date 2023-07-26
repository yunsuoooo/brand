import notion from "@/hooks/notion";

const notionDatabaseId = process.env.NOTION_DATABASE_ID as string;

export async function getPosts() {
  const database = await notion.databases.query({
    database_id: notionDatabaseId,
  });

  const posts = database.results.map((page) => ({
    id: page.id,
    createdTime: page["created_time"],
    title: page["properties"]["이름"]["title"][0]["text"]["content"],
  }));

  const pages = await Promise.all(
    posts.map(async (post) => {
      const page = await notion.pages.retrieve({ page_id: post.id });
      return page;
    })
  );

  return posts;
}
