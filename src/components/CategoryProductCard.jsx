
import Link from "next/link";

export default function CategoryProductCard({ product }) {
  const {
    id,
    image,
    nameBn,
    today,
    yesterday,
    unit,
    change,
  } = product;

  const direction = change?.dir;
  const percentage = Math.abs(change?.pct ?? 0);

  const unitName = {
    kg: "কেজি",
    litre: "লিটার",
    liter: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("bn-BD").format(price ?? 0);
  };

  return (
    <Link
      href={`/product/${id}`}
      className="block h-full"
    >
      <div className="h-full bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">

        {/* Product Info */}
        <div className="flex items-center gap-3 mb-6">

          <div className="w-14 h-14 bg-[#f3f7f3] rounded-xl flex items-center justify-center text-3xl shrink-0">
            {image}
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800">
              {nameBn}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              প্রতি {unitName[unit] || unit}
            </p>
          </div>

        </div>

        {/* Today's Price */}
        <div>

          <p className="text-sm text-gray-500 mb-1">
            আজকের দাম
          </p>

          <div className="flex justify-between items-center gap-2">

            <h3 className="text-2xl font-bold text-gray-900">
              ৳{formatPrice(today)}
            </h3>

            <span
              className={`text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap ${
                direction === "up"
                  ? "bg-red-50 text-red-600"
                  : direction === "down"
                  ? "bg-green-50 text-green-600"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {direction === "up"
                ? "▲"
                : direction === "down"
                ? "▼"
                : "—"}{" "}
              {formatPrice(percentage)}%
            </span>

          </div>

        </div>

        {/* Yesterday Price */}
        <div className="border-t border-gray-100 mt-4 pt-3 flex justify-between items-center">

          <p className="text-sm text-gray-500">
            গতকালের দাম
          </p>

          <p className="text-sm font-semibold text-gray-700">
            ৳{formatPrice(yesterday)}
          </p>

        </div>

      </div>
    </Link>
  );
}
