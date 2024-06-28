import { AppProps } from 'next/app';
import React from "react";
import "../app/globals.css";
import { Oswald } from "next/font/google";
import { NavBarMenuMobile, NavBarMenuDesktop } from '@/components/NavBarMenu';
import Head from "next/head"

const oswald = Oswald({ subsets: ["latin"] });

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>

            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
          
            </Head>

            <section className={`${oswald.className} lg:flex m-0 p-0 h-[85vh] overflow-x-hidden`}>
                <NavBarMenuMobile />
                <NavBarMenuDesktop />
                <Component {...pageProps} />
            </section>

        </>
    )
}

export default App;