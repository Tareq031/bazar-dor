import React from "react";
import Link from "next/link";

const NavLinks = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <p>Category load করা যায়নি।</p>;
  }

  const response = await res.json();
  const navs = Array.isArray(response) ? response : [response];

  return (
    <div className="flex flex-wrap gap-5 justify-center mt-5">
      {navs.map((n) => (
        <Link
          key={n.id}
          href={`/category/${n.slug}`}
          className="font-semibold text-gray-700 hover:text-green-600 transition"
        >
          {n.icon} {n.nameBn}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;