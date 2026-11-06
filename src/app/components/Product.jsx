
import Link from "next/link";

const Product = ({ p }) => {
  return (
    
     <Link
  href={`/product/${p.id}`}
  className="block rounded-xl border border-[#e2e9e3] bg-[#fbfdfb] p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
>

      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#f1f5f0] text-4xl">
        {p.image}
      </div>

      <h2 className="mt-3 text-base font-bold text-gray-800">
        {p.nameBn}
      </h2>

      <p className="mt-1 text-xs text-gray-500">
        প্রতি {p.unit === "kg" ? "কেজি" : p.unit === "liter" ? "লিটার" : p.unit}
      </p>

      <div className="mt-3 flex items-center justify-between">

        <div>
          <p className="text-xs text-gray-500">
            আজকের বাজার দর
          </p>

          <h3 className="text-lg font-bold text-gray-900">
            {p.today} টাকা
          </h3>
        </div>

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

    </Link>
  );
};

export default Product;
