import Image from "next/image";

import { IcLogo } from "@/assets";

export default function LayoutHeader() {
  return (
    <div
      id="header-collapse-trigger" 
      className="sticky top-0 z-40">
      <header className="flex items-center space-x-4  bg-white px-4 md:px-16 transition border-b">
        <div className="flex-1 flex space-x-2 items-center">
          <Image src={IcLogo} alt="Logo" className="w-16 h-16" />
        </div>
        <button className="bg-violet-700 text-white px-4 py-2 rounded-lg">Get Started</button>
        <button className="bg-stone-200 px-4 py-2 rounded-lg">Login</button>
      </header>
    </div>
  );
}
