
import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-3">
            <div className="bg-[#f9fcf9] border border-gray-200 rounded-2xl px-8 py-6 flex items-center justify-between min-h-[165px]">

                <div className="max-w-xl">
                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                        সোমবার, ৪ নভেম্বর, ২০২৬
                    </span>

                    <h1 className="text-2xl font-bold text-gray-800 mt-2">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    <p className="text-xs text-gray-500 mt-3 leading-5">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও সবজির দাম —
                        বাজারভিত্তিক বিশ্লেষণ, দর, সর্বনিম্ন-সর্বোচ্চ এবং
                        বাজার পরিস্থিতি এক জায়গায়।
                    </p>

                    <button className="bg-green-700 hover:bg-green-800 text-white text-xs font-semibold px-4 py-2 rounded-md mt-4">
                        সব দাম দেখুন
                    </button>
                </div>

                <div className="hidden sm:block">
                    <Image
                        src="/bazar-hero.png"
                        width={150}
                        height={130}
                        alt="Vegetable Basket"
                        className="object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;
