import "uno.css";
import "@unocss/reset/tailwind.css";

import type { AppProps } from "next/app";

import "@/index.css";
import { defaultFont } from "@/fonts";
import LayoutFooter from "@/components/LayoutFooter";
import LayoutHeader from "@/components/LayoutHeader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main
        className={defaultFont.className.concat(" flex flex-col space-y-16")}
      >
        <LayoutHeader />
        <div
          className="flex flex-col space-y-16 overflow-scroll">
          <Component {...pageProps} />
        </div>
        <LayoutFooter />
      </main>
    </>
  );
}
