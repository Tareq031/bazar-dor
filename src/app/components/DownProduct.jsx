import React from "react";
import Link from "next/link";

const DownProduct = ({ p }) => {
  return (
    <Link
     href={`/product/${p.id}`}
      className="flex items-center gap-3 rounded-xl border border-[#e2e9e3] bg-[#fbfdfb] p-3 shadow-sm transition hover:shadow-md"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1f5f0] text-2xl">
        {p.image}
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="text-sm font-bold text-gray-800">{p.nameBn}</h2>

        <p className="text-[10px] text-gray-500">
          প্রতি {p.unit === "kg" ? "কেজি" : "লিটার"}
        </p>

        <p className="mt-2 text-[10px] text-gray-500">আজকের বাজার দর</p>

        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900">
            {p.today} টাকা
          </h3>

          <span className="rounded-full bg-green-50 px-2 py-1 text-[9px] font-bold text-green-600">
            ▼ {p.change?.pct}%
          </span>
        </div>
      </div>
    </Link>
  );
};

export default DownProduct;