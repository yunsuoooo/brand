import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post",
  description: "Post page",
};

interface PageProps {
  params: Promise<{ id: string }>;
}

const PostPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const { title, createdAt, tags, blocks } = await getPost(id);

  return (
    <>
      <p>post: {title}</p>
      <p>createdAt: {createdAt}</p>
    </>
  );
};

export default PostPage;

const getPost = async (id: string) => {
  return {
    title: "title",
    createdAt: "2021-01-01",
    tags: ["tag1", "tag2"],
    blocks: ["block1", "block2"],
  };
};
