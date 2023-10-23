import { Nunito_Sans } from 'next/font/google';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import '@/index.css';
import { defaultFont } from "@/fonts";
import LayoutFooter from '@/components/LayoutFooter';
import LayoutHeader from '@/components/LayoutHeader';


export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title></title>
            </Head>

            <div className={defaultFont.className.concat(" text-[14.5px]")}>
                <LayoutHeader />
                <Component {...pageProps} />
                <LayoutFooter />

            </div>

        </>
    );
}
