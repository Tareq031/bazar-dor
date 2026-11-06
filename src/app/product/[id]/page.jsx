
import Link from "next/link";

const API_URL =
  "https://api.api-store.workers.dev/api/bazardor/products";

const formatPrice = (price) => {
  return Number(price).toLocaleString("bn-BD");
};

const getUnit = (unit) => {
  if (unit === "kg") return "কেজি";
  if (unit === "litre" || unit === "liter") return "লিটার";
  return unit;
};

export default async function ProductDetails({ params }) {
  const { id } = await params;

  let product = null;

  try {
    const res = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Product load failed");
    }

    const products = await res.json();

    product = products.find(
      (p) => String(p.id) === String(id)
    );
  } catch (error) {
    console.error("Product fetching error:", error);
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f1f5f0]">
        <div className="text-center bg-white p-10 rounded-2xl shadow-sm">
          <h1 className="text-2xl font-bold text-red-500">
            Product not found!
          </h1>

          <Link
            href="/"
            className="inline-block mt-5 bg-green-700 text-white px-6 py-2 rounded-lg"
          >
            ফিরে যাও
          </Link>
        </div>
      </div>
    );
  }

  const unit = getUnit(product.unit);

  const priceHistory = [
    {
      title: "গতকাল",
      price: product.yesterday,
      color: "text-gray-800",
    },
    {
      title: "গত সপ্তাহে",
      price: product.lastWeek,
      color: "text-red-600",
    },
    {
      title: "গত মাসে",
      price: product.lastMonth,
      color: "text-green-700",
    },
  ];

  const isUp = product.change?.dir === "up";
  const isDown = product.change?.dir === "down";

  return (
    <main className="min-h-screen bg-[#f1f5f0] py-8">

      <div className="max-w-6xl mx-auto px-4">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-5">
          <Link href="/" className="hover:text-green-700">
            হোম
          </Link>

          <span>›</span>

          <Link
            href="/"
            className="hover:text-green-700"
          >
            {product.categoryNameBn}
          </Link>

          <span>›</span>

          <span className="text-gray-800 font-semibold">
            {product.nameBn}
          </span>
        </div>

        {/* Product Header */}
        <section className="bg-[#fbfdfb] rounded-xl border border-[#e2e9e3] p-5 md:p-8 mb-5">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-xl bg-[#f1f5f0] flex items-center justify-center text-4xl">
                {product.image}
              </div>

              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                  {product.nameBn}
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                  প্রতি {unit} · {product.categoryNameBn}
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  বাংলাদেশের বাজার দর অনুযায়ী
                </p>
              </div>

            </div>

            {/* Today's Price */}
            <div className="bg-[#f1f7f1] rounded-xl px-6 py-4 min-w-[150px]">

              <p className="text-xs text-gray-500">
                আজকের বাজার দর
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-1">
                {formatPrice(product.today)}
                <span className="text-sm font-medium ml-1">
                  টাকা
                </span>
              </h2>

              <div className="mt-2">

                {isUp && (
                  <span className="text-xs font-bold text-red-500">
                    ▲ {formatPrice(product.change.pct)}%
                  </span>
                )}

                {isDown && (
                  <span className="text-xs font-bold text-green-600">
                    ▼ {formatPrice(Math.abs(product.change.pct))}%
                  </span>
                )}

                {product.change?.dir === "flat" && (
                  <span className="text-xs font-bold text-gray-500">
                    অপরিবর্তিত
                  </span>
                )}

              </div>

            </div>

          </div>
        </section>

        {/* Price History */}
        <section className="bg-[#fbfdfb] rounded-xl border border-[#e2e9e3] p-5 md:p-7 mb-5">

          <h2 className="text-base font-bold text-gray-800 mb-4">
            দামের সাম্প্রতিক অবস্থা
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

            {priceHistory.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e2e9e3] p-4 bg-[#fbfdfb]"
              >

                <p className="text-xs text-gray-500">
                  {item.title}
                </p>

                <h3 className={`text-xl font-bold mt-2 ${item.color}`}>
                  {formatPrice(item.price)} টাকা
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  প্রতি {unit} এর বাজার দর
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* Market Price Table */}
        <section className="bg-[#fbfdfb] rounded-xl border border-[#e2e9e3] p-5 md:p-7">

          <h2 className="text-base font-bold text-gray-800 mb-4">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[650px] text-sm text-left">

              <thead>
                <tr className="bg-[#f1f5f0] text-gray-600 border-y border-[#e2e9e3]">

                  <th className="px-4 py-3 font-semibold">
                    বাজারের নাম
                  </th>

                  <th className="px-4 py-3 font-semibold">
                    বিভাগ
                  </th>

                  <th className="px-4 py-3 font-semibold text-right">
                    সর্বনিম্ন
                  </th>

                  <th className="px-4 py-3 font-semibold text-right">
                    সর্বোচ্চ
                  </th>

                  <th className="px-4 py-3 font-semibold text-right">
                    আনুমানিক গড়
                  </th>

                </tr>
              </thead>

              <tbody>

                {product.markets?.map((market, index) => {

                  const average = Math.round(
                    (market.min + market.max) / 2
                  );

                  return (
                    <tr
                      key={`${market.market}-${index}`}
                      className="border-b border-gray-200 hover:bg-[#f1f7f1] transition"
                    >

                      <td className="px-4 py-3 font-medium text-gray-800">
                        {market.market}
                      </td>

                      <td className="px-4 py-3 text-gray-600">
                        {market.division}
                      </td>

                      <td className="px-4 py-3 text-right text-green-700 font-semibold">
                        {formatPrice(market.min)} টাকা
                      </td>

                      <td className="px-4 py-3 text-right text-red-500 font-semibold">
                        {formatPrice(market.max)} টাকা
                      </td>

                      <td className="px-4 py-3 text-right font-bold text-gray-800">
                        {formatPrice(average)} টাকা
                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>

          </div>

          <p className="text-xs text-gray-400 mt-4">
            * আনুমানিক গড় = (সর্বনিম্ন দাম + সর্বোচ্চ দাম) ÷ ২।
          </p>

        </section>

        {/* Back Button */}
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900"
          >
            ← সব পণ্যে ফিরে যাও
          </Link>
        </div>

      </div>

    </main>
  );
}
