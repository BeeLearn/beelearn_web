import Link from "next/link";
import Image from "next/image";

import { IcLogo, IcBrand, IcMascot } from "@/assets";

export default function LayoutHeader() {
  return (
    <div id="header-collapse-trigger" className="sticky top-0 z-40">
      <header className="flex items-center space-x-4  bg-white px-4 md:px-16 transition border-b">
        <div className="flex-1 flex space-x-2 items-center">
          <Image src={IcMascot} alt="Logo" className="w-18 h-18" />
        </div>
        <Link
          href="https://auth.usebeelearn.com/sign-up?source=landing-page"
          target="_blank"
          className="bg-violet-700 text-white px-4 py-2 rounded-md active:bg-violet-900 focus:ring-4 focus:ring-violet focus:ring-offset-1"
        >
          Get Started
        </Link>
        <Link
          href="https://auth.usebeelearn.com/?source=landing-page"
          target="_blank"
          className="bg-stone-200 px-4 py-2 rounded-md active:bg-stone-300 focus:ring-4 focus:ring-stone-300 focus:ring-offset-1"
        >
          Login
        </Link>
      </header>
    </div>
  );
}
