import React from "react";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();

  return (
    <div className="bg-green-50 py-3">
      <MarqueeText direction="right" duration={20}>
        {data.map((d) => (
          <Link
            key={d.id}
            href={`/product/${d.id}`}
            className="inline-flex items-center gap-2 mx-5 font-semibold text-gray-700 hover:text-green-600"
          >
            {d.image} {d.nameBn}
            <span className="text-green-700">{d.today} টাকা</span>
            <span>•</span>
          </Link>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;