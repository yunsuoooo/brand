import Link from "next/link";

import type { PostPreviewType } from "@/features/post/model";

function PostPreview({ slug, title, createdAt }: PostPreviewType) {
  return (
    <Link href={`/posts/${slug}`} className="group justify-between flex gap-2">
      <div className="group-hover:underline">{title}</div>
      <div className="text-zinc-400">{createdAt.slice(0, 10)}</div>
    </Link>
  );
}

export default PostPreview;
