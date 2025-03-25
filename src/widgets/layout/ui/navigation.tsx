import Link from "next/link";

function Navigation() {
  return (
    <div className="sticky top-0 z-50 flex flex-row justify-between px-4 py-2 bg-background">
      {/* navigation */}
      <div className="flex flex-row gap-2">
        <div className="flex flex-row gap-2">
          <Link className="text-zinc-400 hover:underline" href="/">
            ynslmn
          </Link>
        </div>
      </div>

      {/* menus */}
      <div className="flex flex-row gap-2">
        <div className="flex flex-row gap-2">
          <Link className="text-foreground hover:underline" href="/posts">
            Posts
          </Link>
          <Link
            className="text-foreground hover:underline"
            href="mailto:than4502@gmail.com"
          >
            Email
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
