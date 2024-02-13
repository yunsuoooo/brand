import notionAPI from "@/lib/notion";
import { NotionTagColor } from "@/constants";
import { cn } from "@/lib/utils";

const PostPage = async ({ params }: { params: { id: string } }) => {
  const { title, createdAt, tags, blocks } = await getPost(params.id);

  return (
    <>
      <p>post: {title}</p>
      <p>createdAt: {createdAt}</p>
      {tags.map((tag) => (
        <div className={cn(`bg-${NotionTagColor[tag.color]}`)} key={tag.id}>
          {tag.name}
        </div>
      ))}
    </>
  );
};

export default PostPage;

const getPost = async (id: string) => {
  const post = await notionAPI.getPage(id);

  return post;
};
