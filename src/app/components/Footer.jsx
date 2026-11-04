
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#e5eee8] bg-[#f8fbf8]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-600">

        <p>
          বাজার দর — প্রতিদিনের পণ্যের সঠিক দর জানুন।
        </p>

        <p>
          সকল পণ্যের মূল্য, বাজারের অবস্থার উপর নির্ভর করে পরিবর্তিত হয়।
        </p>

      </div>

      <div className="border-b-2 border-dotted border-sky-300"></div>
    </footer>
  );
};

export default Footer;
