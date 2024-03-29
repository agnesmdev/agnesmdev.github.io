import type {AppProps} from 'next/app'
import "./globals.scss";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Background from "@/app/background";
import Loading from "@/app/loading";

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
    <Background lang={lang} darkMode={darkMode}/>
    <Component lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} {...pageProps} />
  </>
}