import PostPreview from "./post-preview";

import type { PostPreviewType } from "../model";

interface PostListProps {
  posts: PostPreviewType[];
}

function PostList({ posts }: PostListProps) {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <PostPreview key={post.id} {...post} />
      ))}
    </div>
  );
}

export default PostList;
