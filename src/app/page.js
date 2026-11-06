
import Marquee from "./components/Marquee";
import Banner from "./components/Banner";
import UpProducts from "./components/UpProducts";
import DownProduct from "./components/DownProduct";
import Product from "./components/Product";



export default async function Home() {

  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { cache: "no-store" }
  );

  const data = await res.json();

  
  const increasedProducts = data
    .filter((p) => p.change?.dir === "up")
    .slice(0, 6);

     const decreasedProducts = data
    .filter((p) => p.change?.dir === "down")
    .slice(0, 6);

  return (
    <div>
      
      <Banner />

      <div className="max-w-7xl mx-auto px-4 py-5">

        <h2 className="text-lg font-bold mb-3 text-gray-800">
          <span className="text-red-500">▲</span>
          {" "}আজ দাম বেড়েছে
        </h2>

        <div className="grid grid-cols-3 gap-4">

          {increasedProducts.map((p) => (
            <UpProducts key={p.id} p={p} />
          ))}

        </div>

         {/* দাম কমেছে */}
        <h2 className="text-lg font-bold mb-3 mt-8 text-gray-800">
          <span className="text-green-600">▼</span> আজ দাম কমেছে
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {decreasedProducts.map((p) => (
            <DownProduct key={p.id} p={p} />
          ))}
        </div>

        {/* সব পণ্য */}
        <h2 className="text-lg font-bold mt-8 mb-3 text-gray-800">
          সব পণ্য
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((p) => (
            <Product key={p.id} p={p} />
          ))}
        </div>

        

      </div>
    </div>
  );
}
