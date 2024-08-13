"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [articles, setArticles] = useState([])


  useEffect(() => {
    fetch("http://localhost:4000/articles")
      .then(res => res.json())
      .then((data) => { setArticles(data) })
  }, [])
  return (
    <main className="grid grid-cols-2 w-full h-screen font-robo">
      {/* {articles.map((article) => (
        <div key={article.id}>{article.title}</div>
      ))}
       */}
      <div className="bg-white flex items-center">

        <div className="w-1/2 mx-auto flex flex-col gap-5 items-center text-center">
          <span className="text-black flex gap-1 mb-5">
            <Image src="/geld-logo.svg" alt="logo" width={1200} height={1200} className="w-[24px]" />
            <Image src="/geld-text.svg" alt="logo" width={1200} height={1200} className="w-[48px]" />
          </span>
          <p className="text-black text-2xl font-semibold">Welcome Back</p>
          <p className="text-black text-base mb-5">Welcome back, Please enter your details</p>
          <input type="text" className="input input-bordered bg-[#F3F4F6] input-md w-full max-w-[385px]" placeholder="Email" />
          <input type="password" className="input input-bordered bg-[#F3F4F6] input-md w-full max-w-[385px]" placeholder="Password" />
          <button className="btn rounded-3xl bg-[#0166FF] text-white border-none btn-md w-full mb-5 max-w-[385px]">Log in</button>
          <div className="text-black text-base flex gap-4">
            <p >Don't have an account?  </p>
            <Link href="" className="text-[#0166FF]">Sign up</Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0166FF]"></div>


    </main>
  );
}
