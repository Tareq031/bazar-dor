

import CategoryProductList from "../../components/CategoryProductList";
import CategoryProductCard from "../../../components/CategoryProductCard";
export default async function CategoryPage({ params }) {
  const { id } = await params;

  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return (
      <div className="text-center py-20">
        <h1 className="text-xl font-bold text-red-500">
          Product load করা যায়নি!
        </h1>
      </div>
    );
  }

  const products = await res.json();

  // API থেকে পাওয়া products filter
  const categoryProducts = products.filter(
    (product) => product.category === id
  );

  if (categoryProducts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0f6f1]">
        <h1 className="text-2xl font-bold text-gray-600">
          কোনো Product পাওয়া যায়নি!
        </h1>
      </div>
    );
  }

  const { categoryNameBn, categoryIcon } = categoryProducts[0];

  return (
    <main className="min-h-screen bg-[#f0f6f1] py-7">

      <div className="max-w-6xl mx-auto px-4">

        {/* Category Header */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-7 mb-7">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-4xl">
              {categoryIcon}
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {categoryNameBn}
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                প্রতিদিন পণ্যের বাজার দর ও পরিবর্তন
              </p>
            </div>

          </div>

        </div>

        {/* Product List */}
        <CategoryProductList products={categoryProducts} />

      </div>

    </main>
  );
}