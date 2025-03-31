function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-16 px-4 py-16">
      <div className="prose w-full sm:w-[480px] text-zinc-900">{children}</div>
    </div>
  );
}

export default PostsLayout;
