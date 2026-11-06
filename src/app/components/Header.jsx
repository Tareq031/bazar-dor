
import React from "react";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

        {/* Logo and Date */}
        <div className="flex items-center gap-3">

          <Image
            height={50}
            width={50}
            src="/logo-icon.png"
            alt="বাজার দর Logo"
            className="w-11 h-11 sm:w-[50px] sm:h-[50px] object-contain"
            priority
          />

          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              বাজার দর
            </h1>

            <p className="text-xs sm:text-sm text-gray-500">
              {date}
            </p>
          </div>

        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">

          <Link
            href="/sign-in"
            className="flex-1 sm:flex-none text-center px-4 py-2 text-sm font-semibold text-green-700 border border-green-700 rounded-lg hover:bg-green-50 transition duration-300"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="flex-1 sm:flex-none text-center px-4 py-2 text-sm font-semibold text-white bg-green-700 rounded-lg shadow-sm hover:bg-green-800 hover:shadow-md transition duration-300"
          >
            সাইন আপ
          </Link>

        </div>

      </div>

      {/* Navigation */}
      <div className="mt-4">
        <NavLinks />
      </div>

    </header>
  );
};

export default Header;
