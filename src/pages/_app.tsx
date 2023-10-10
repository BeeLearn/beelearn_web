import { Nunito_Sans } from 'next/font/google';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import '@/index.css';
import { defaultFont} from "@/fonts";


export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title></title>
            </Head>
            <div className={defaultFont.className.concat(" text-[14.5px]")}>
                <Component {...pageProps} />
            </div>
        </>
    );
}
