"use client"

import Image from "next/image";

export default function Home() {

  return (
    <main className="grid grid-cols-2 w-full h-screen font-robo">
 
      <div className="bg-white flex items-center">

        <div className="w-1/2 mx-auto flex flex-col gap-5 items-center text-center">
          <span className="text-black flex gap-1 mb-5">
            <Image src="/geld-logo.svg" alt="logo" width={1200} height={1200} className="w-[24px]" />
            <Image src="/geld-text.svg" alt="logo" width={1200} height={1200} className="w-[48px]" />
          </span>
          <span className="loading loading-spinner text-[#0166FF]"></span>
          <p className="text-black">Wait a moment please...</p>
         
        </div>
      </div>
      <div className="bg-[#0166FF]"></div>


    </main>
  );
}
