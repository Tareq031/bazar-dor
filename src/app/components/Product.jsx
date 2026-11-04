import React from "react";

const Product = ({ p }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">

      {/* Product Image / Emoji */}
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100 text-4xl">
        {p.image}
      </div>

      {/* Product Name */}
      <h2 className="mt-3 text-base font-bold text-gray-800">
        {p.nameBn}
      </h2>

      <p className="mt-1 text-xs text-gray-500">
        প্রতি {p.unit === "kg" ? "কেজি" : "লিটার"}
      </p>

      {/* Price */}
      <div className="mt-3 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">আজকের বাজার দর</p>
          <h3 className="text-lg font-bold text-gray-900">
            {p.today} টাকা
          </h3>
        </div>

        {/* Price Change */}
        <div>
          {p.change?.dir === "up" && (
            <span className="rounded-full bg-red-50 px-2 py-1 text-xs font-bold text-red-500">
              ▲ {p.change.pct}%
            </span>
          )}

          {p.change?.dir === "down" && (
            <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-bold text-green-600">
              ▼ {p.change.pct}%
            </span>
          )}

          {p.change?.dir === "flat" && (
            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-bold text-gray-500">
              অপরিবর্তিত
            </span>
          )}
        </div>
      </div>

    </div>
  );
};

export default Product;