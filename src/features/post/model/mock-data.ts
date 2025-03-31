import { PostPreviewType, PostType } from "./post-types";

export const mockPost: PostType = {
  id: "1",
  title: "Getting Started with Next.js and TypeScript",
  slug: "getting-started-with-nextjs-and-typescript",
  createdAt: "2024-03-20T10:00:00Z",
  updatedAt: "2024-03-20T10:00:00Z",
  content: [
    {
      id: "1",
      type: "paragraph",
      content:
        "Next.js is a powerful framework for building React applications. In this post, we'll explore how to get started with Next.js and TypeScript.",
    },
    {
      id: "2",
      type: "orderedList",
      items: [
        {
          id: "1",
          content: "Create a new Next.js project",
        },
        {
          id: "2",
          content: "Configure TypeScript",
        },
        {
          id: "3",
          content: "Set up your development environment",
        },
      ],
    },
    {
      id: "3",
      type: "codeBlock",
      code: `import { FC } from 'react';

interface Props {
  title: string;
}

const Page: FC<Props> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Page;`,
      language: "typescript",
      fileName: "page.tsx",
      lineNumbers: true,
    },
    {
      id: "4",
      type: "image",
      url: "/images/nextjs-setup.png",
      alt: "Next.js project setup",
      caption: "Project structure after initial setup",
    },
    {
      id: "5",
      type: "blockquote",
      content:
        "TypeScript adds static typing to JavaScript, making it easier to catch errors early in development.",
      author: "TypeScript Team",
      source: "TypeScript Documentation",
    },
    {
      id: "6",
      type: "table",
      headers: ["Feature", "Next.js", "Create React App"],
      rows: [
        ["Server-side Rendering", "✅", "❌"],
        ["Static Site Generation", "✅", "❌"],
        ["API Routes", "✅", "❌"],
        ["File-based Routing", "✅", "❌"],
      ],
    },
    {
      id: "7",
      type: "video",
      url: "https://www.youtube.com/embed/example",
      title: "Next.js Tutorial",
      description: "Learn the basics of Next.js in this comprehensive tutorial",
    },
    {
      id: "8",
      type: "unorderedList",
      items: [
        {
          id: "1",
          content: "Built-in TypeScript support",
        },
        {
          id: "2",
          content: "Fast refresh for development",
        },
        {
          id: "3",
          content: "Optimized production builds",
        },
      ],
    },
    {
      id: "9",
      type: "divider",
    },
    {
      id: "10",
      type: "paragraph",
      content:
        "That's it! You now have a basic understanding of how to work with Next.js and TypeScript. Happy coding!",
    },
  ],
};

export const mockPosts: PostType[] = [mockPost];

export const mockPostPreviews: PostPreviewType[] = mockPosts.map((post) => ({
  id: post.id,
  title: post.title,
  slug: post.slug,
  createdAt: post.createdAt,
  path: `/posts/${post.slug}`,
}));
