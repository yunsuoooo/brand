import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import type { PostView } from "@/types";

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});

const getNotionDatabase = async (databaseId: string) => {
  const database = await notion.databases.query({
    database_id: databaseId,
  });

  return database.results.map((page) => {
    const data = page as PageObjectResponse;

    return getPageProperty(data);
  });
};

const getNotionPage = async (pageId: string) => {
  const page = await notion.pages.retrieve({
    page_id: pageId,
  });
  const pageProperty = getPageProperty(page as PageObjectResponse);

  const { results } = await notion.blocks.children.list({ block_id: pageId });

  return { ...pageProperty, blocks: results };
};

const notionAPI = { getDatabase: getNotionDatabase, getPage: getNotionPage };

export default notionAPI;

const getPageProperty = (page: PageObjectResponse) => {
  const customPage = {
    id: page.id,
    createdAt: page.created_time,
  } as PostView;

  const titleProperty = page.properties["title"];
  const tagProperty = page.properties["tag"];

  if (titleProperty.type === "title") {
    customPage.title = titleProperty.title[0].plain_text;
  }

  if (tagProperty.type === "multi_select") {
    customPage.tags = tagProperty.multi_select;
  }

  return customPage;
};
