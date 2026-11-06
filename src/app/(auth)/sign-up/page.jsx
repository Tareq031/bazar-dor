// 'use client';
// import { authClient } from "@/lib/auth-client";
// import { redirect } from "next/navigation";

// import React from "react";
// import Link from "next/link";


//  const SignUpPage = () => {

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//         const formData = new FormData(e.target);
//         const user = Object.fromEntries(formData.entries());
//         const { data, error } = await authClient.signUp.email({
//         ...user,
//         callbackURL: "/" // A URL to redirect to after the user verifies their email (optional)
//     })

//     if (data) {
//         redirect("/sign-in"); // Redirect to the sign-in page after successful signup
//         console.log("Signup successful:", data);
        
//     }

//     if (error) {
//         console.error("Signup error:", error);
//     }
//     }
//   return (
//     <div className="min-h-screen bg-[#f1f6f1] px-4 py-10">

//       <div className="max-w-md mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-5">
//           <h1 className="text-2xl font-bold text-gray-800">
//             অ্যাকাউন্ট তৈরি করুন
//           </h1>

//           <p className="text-sm text-gray-500 mt-1">
//             বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
//           </p>
//         </div>

//         {/* Signup Form */}
//         <form onSubmit={handleSubmit} className="bg-[#fbfdfb] border border-[#e0e9e0] rounded-xl p-5 sm:p-6">

//           {/* Name */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               নাম
//             </label>

//            <input
//                 name="name"
//                 type="text"
//                 placeholder="Name"
//                 required
//                 className="w-full h-11 px-3 text-sm border border-gray-200 rounded-lg"
//                 />
//           </div>

//           {/* Email */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               ইমেইল
//             </label>

//             <input
//               name="email"
//               type="email"
//               placeholder="Email"
//               required
//               className="w-full h-11 px-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-transparent"
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               পাসওয়ার্ড
//             </label>

//             <input
//               name="password"
//               type="password"
//               placeholder="password"
//               required
//               className="w-full h-11 px-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-transparent"
//             />
//           </div>

//           {/* Confirm Password */}
//           <div className="mb-5">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               পাসওয়ার্ড নিশ্চিত করুন
//             </label>

//             <input
//               name="confirmPassword"
//               type="password"
//               placeholder="confirm password"
//               required
//               className="w-full h-11 px-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-transparent"
//             />
//           </div>

//           {/* Signup Button */}
//           <button 
//             type="submit"
//             className="w-full h-11 bg-green-700 hover:bg-green-800 text-white font-bold text-sm rounded-lg shadow-md transition duration-300"
//           >
//             অ্যাকাউন্ট তৈরি করুন
//           </button>

//           {/* Divider */}
//           <div className="flex items-center gap-3 my-5">
//             <div className="flex-1 border-t border-gray-200"></div>

//             <span className="text-xs text-gray-500">
//               অথবা
//             </span>

//             <div className="flex-1 border-t border-gray-200"></div>
//           </div>

//           {/* Social Login */}
//           <div className="grid grid-cols-2 gap-3">

//             <button
//               type="button"
//               className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg h-10 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition"
//             >
//               <span className="text-base font-bold text-blue-600">
//                 G
//               </span>
//               Google দিয়ে চালিয়ে যান
//             </button>

//             <button
//               type="button"
//               className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg h-10 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition"
//             >
//               <svg
//                 viewBox="0 0 24 24"
//                 className="w-4 h-4 fill-current"
//                 aria-hidden="true"
//               >
//                 <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.5-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .72 2.06.52 2.56.4.1-.72.39-1.21.7-1.49-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.33-2.64 5.28-5.15 5.56.4.34.75 1.02.75 2.06v3.65c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
//               </svg>

//               GitHub দিয়ে চালিয়ে যান
//             </button>

//           </div>

//           {/* Login Link */}
//           <p className="text-center text-xs text-gray-600 mt-5">
//             অ্যাকাউন্ট আছে?{" "}
//             <Link
//               href="/sign-in"
//               className="text-green-700 font-semibold hover:underline"
//             >
//               সাইন ইন করুন
//             </Link>
//           </p>

//         </form>

//         {/* Back Home */}
//         <div className="text-center mt-5">
//           <Link
//             href="/"
//             className="text-xs text-gray-400 hover:text-green-700 transition"
//           >
//             ← হোম পেজে ফিরে যান
//           </Link>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default SignUpPage;























"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      setError("দুটি পাসওয়ার্ড মিলছে না!");
      return;
    }

    if (password.length < 8) {
      setError("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে!");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        setError(error.message || "অ্যাকাউন্ট তৈরি করা যায়নি!");
        return;
      }

      if (data) {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setError("Sign up করা সম্ভব হয়নি। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setError("");
    setSocialLoading(provider);

    try {
      const { error } = await authClient.signIn.social({
        provider,
        callbackURL: "/",
      });

      if (error) {
        setError(error.message || "Social login failed!");
        setSocialLoading("");
      }
    } catch (err) {
      setError("Social login করা সম্ভব হয়নি।");
      setSocialLoading("");
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f6f1] px-4 py-10">
      <div className="max-w-md mx-auto">

        <div className="text-center mb-5">
          <h1 className="text-2xl font-bold text-gray-800">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#fbfdfb] border border-[#e0e9e0] rounded-xl p-5 sm:p-6"
        >
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              নাম
            </label>

            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              autoComplete="name"
              className="w-full h-11 px-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-transparent"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ইমেইল
            </label>

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              autoComplete="email"
              className="w-full h-11 px-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-transparent"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              পাসওয়ার্ড
            </label>

            <input
              name="password"
              type="password"
              placeholder="Password (minimum 8 characters)"
              required
              minLength={8}
              autoComplete="new-password"
              className="w-full h-11 px-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-transparent"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              পাসওয়ার্ড নিশ্চিত করুন
            </label>

            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              minLength={8}
              autoComplete="new-password"
              className="w-full h-11 px-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-transparent"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-red-600 mb-4">
              {error}
            </p>
          )}

          {/* Signup Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 bg-green-700 hover:bg-green-800 disabled:opacity-60 text-white font-bold text-sm rounded-lg shadow-md transition"
          >
            {loading ? "অপেক্ষা করুন..." : "অ্যাকাউন্ট তৈরি করুন"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 border-t border-gray-200" />

            <span className="text-xs text-gray-500">
              অথবা
            </span>

            <div className="flex-1 border-t border-gray-200" />
          </div>

          {/* Google */}
          <button
            type="button"
            disabled={!!socialLoading}
            onClick={() => handleSocialLogin("google")}
            className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg h-11 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition disabled:opacity-60"
          >
            <span className="text-lg font-bold text-blue-600">
              G
            </span>

            {socialLoading === "google"
              ? "অপেক্ষা করুন..."
              : "Google দিয়ে চালিয়ে যান"}
          </button>

          {/* GitHub */}
          <button
            type="button"
            disabled={!!socialLoading}
            onClick={() => handleSocialLogin("github")}
            className="w-full mt-3 flex items-center justify-center gap-2 border border-gray-200 rounded-lg h-11 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition disabled:opacity-60"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              aria-hidden="true"
            >
              <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.5-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .72 2.06.52 2.56.4.1-.72.39-1.21.7-1.49-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.33-2.64 5.28-5.15 5.56.4.34.75 1.02.75 2.06v3.65c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
            </svg>

            {socialLoading === "github"
              ? "অপেক্ষা করুন..."
              : "GitHub দিয়ে চালিয়ে যান"}
          </button>

          {/* Login Link */}
          <p className="text-center text-xs text-gray-600 mt-5">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/sign-in"
              className="text-green-700 font-semibold hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </form>

        <div className="text-center mt-5">
          <Link
            href="/"
            className="text-xs text-gray-400 hover:text-green-700 transition"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SignUpPage;
