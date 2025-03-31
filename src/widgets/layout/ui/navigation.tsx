"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import BreadCrumb from "@/shared/ui/bread-crumb";

import type { PathLink } from "@/shared/ui/type";

function Navigation() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  const pathLinks: PathLink[] = [
    {
      label: "ynslmn",
      href: "/",
    },
    ...paths.map((path, index) => {
      const href = "/" + paths.slice(0, index + 1).join("/");
      return { label: path, href };
    }),
  ];

  return (
    <div className="sticky top-0 z-50 flex flex-row justify-between px-4 py-2 bg-background">
      <BreadCrumb pathLinks={pathLinks} />

      {/* menus */}
      <div className="flex flex-row gap-2">
        <div className="flex flex-row gap-4">
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
