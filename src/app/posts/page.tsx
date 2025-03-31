import PostList from "@/features/post/ui/post-list";
import { mockPostPreviews } from "@/features/post/model/mock-data";

function PostsPage() {
  return <PostList posts={mockPostPreviews} />;
}

export default PostsPage;
