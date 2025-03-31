import React from "react";
import Link from "next/link";

import { PathLink } from "./type";

/**
 * @description Displays the path to the current resource using a hierarchy of links.
 * @param {PathLink[]} pathLinks - The path links to display.
 */
function BreadCrumb({ pathLinks }: { pathLinks: PathLink[] }) {
  return (
    <div className="flex flex-row gap-2">
      {pathLinks.map((pathLink) => (
        <React.Fragment key={pathLink.href}>
          <Link className="text-zinc-400 hover:underline" href={pathLink.href}>
            {pathLink.label}
          </Link>
          <span className="text-zinc-400 last:hidden">/</span>
        </React.Fragment>
      ))}
    </div>
  );
}

export default BreadCrumb;
