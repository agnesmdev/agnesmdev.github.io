import type {AppProps} from 'next/app'
import "./globals.scss";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Background from "@/app/background";

export default function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();
  const [lang, setLang] = useState("fr");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setLang(navigator.language.toLocaleLowerCase());
    setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, [router.pathname])

  return <>
    <Background lang={lang} darkMode={darkMode}/>
    <Component lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} {...pageProps} />
  </>
}