import type {AppProps} from 'next/app'
import "./globals.scss";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Background from "@/app/background";
import Loading from "@/app/loading";
import Head from "next/head";
import t from "@/app/translation";

export default function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();
  const [lang, setLang] = useState("fr");
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLang(navigator.language.toLocaleLowerCase());
    setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    setLoading(false);
  }, [router.pathname])

  return loading ? <Loading/> : <>
    <Head>
      <title>{t(lang, "siteTitle")}</title>
      <meta name="description" content={t(lang, "siteDescription")}/>
    </Head>
    <Background lang={lang} darkMode={darkMode}/>
    <Component lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} {...pageProps} />
  </>
}