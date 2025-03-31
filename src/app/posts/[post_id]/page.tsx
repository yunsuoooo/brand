import PostContent from "@/features/post/ui/post-content/post-content";
import { mockPosts } from "@/features/post/model/mock-data";

function PostPage({ params }: { params: { post_id: string } }) {
  const post = mockPosts.find((post) => post.slug === params.post_id);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl">{post.title}</div>
      <div className="text-zinc-400">{post.createdAt.slice(0, 10)}</div>
      <PostContent content={post.content} />
    </div>
  );
}

export default PostPage;
