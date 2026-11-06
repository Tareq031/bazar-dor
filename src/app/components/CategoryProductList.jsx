"use client";


import CategoryProductCard from "../../components/CategoryProductCard";


import { useState } from "react";


export default function CategoryProductList({ products }) {

  const [sort, setSort] = useState("default");

  const sortedProducts = [...products];

  // Low to High
  if (sort === "low") {
    sortedProducts.sort(
      (a, b) => a.today - b.today
    );
  }

  // High to Low
  else if (sort === "high") {
    sortedProducts.sort(
      (a, b) => b.today - a.today
    );
  }

  // Price Increased
  else if (sort === "up") {
    sortedProducts.sort(
      (a, b) => b.change.pct - a.change.pct
    );
  }

  // Price Decreased
  else if (sort === "down") {
    sortedProducts.sort(
      (a, b) => a.change.pct - b.change.pct
    );
  }

  return (
    <>

      {/* Sorting Bar */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-5">

        <div className="flex justify-between items-center gap-3">

          <p className="text-sm text-gray-600">
            সাজান
          </p>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-700 outline-none"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low">কম দাম আগে</option>
            <option value="high">বেশি দাম আগে</option>
            <option value="up">দাম বৃদ্ধির হার</option>
            <option value="down">দাম কমার হার</option>
          </select>

        </div>

      </div>

      {/* Product Count */}
      <p className="text-sm text-gray-500 mb-5">
        মোট {products.length} টি পণ্য দেখানো হচ্ছে
      </p>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {sortedProducts.map((product) => (
          <CategoryProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </>
  );
}