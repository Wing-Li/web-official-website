"use client";

import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-bold">完整网页</h1>
      <Link href="/web1" className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Web
        </button>
      </Link>

      <div className="my-8 h-[1px] w-1/3 bg-gray-200"></div>

      <h1 className="text-xl font-bold">单页面</h1>
      <Link href="/webs1" className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Web 1
        </button>
      </Link>
      <Link href="/webs2" className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Web 2
        </button>
      </Link>
      <Link href="/webs3" className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Web 3
        </button>
      </Link>

    </div>
  );
}
