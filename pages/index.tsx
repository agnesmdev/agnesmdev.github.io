import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope, faHeart, faStar, faSave} from "@fortawesome/free-solid-svg-icons"
import {faLinkedin, faTwitter, faGithub} from "@fortawesome/free-brands-svg-icons"
import translationFr from "../public/locales/fr/translation.json";
import translationEn from "../public/locales/en/translation.json";
import DarkModeToggle from "@/app/darkModeToggle";
import LanguageButton from "@/app/languageButton";
import MediaButton from "@/app/mediaButton";
import DarkModeButton from "@/app/darkModeButton";
import {Metadata} from "next";

type HomeProps = {
  lang: string,
  setLang: (language: string) => void
  darkMode: boolean,
  setDarkMode: (mode: boolean) => void
}

export const metadata: Metadata = {
  title: 'Agnès Cardin',
  description: 'Agnès Cardin',
  metadataBase: new URL('https://portfolio.agnesm.dev'),
};


export default function Home(props: HomeProps) {
  const {lang, setLang, darkMode, setDarkMode} = props;

  const t = (text: string) => {
    if (lang.includes("fr")) {
        // @ts-ignore
        return translationFr[text];
    }
    if (lang.includes("en")) {
        // @ts-ignore
        return translationEn[text];
    }
    return text;
  };

  const boxShadow = props.darkMode ? "shadow-gray-400" : "shadow-gray-700";

  return (
    <main className={`flex min-h-full max-h-full flex-col box-border items-center justify-between p-4 lg:px-24 ${darkMode ? "dark" : ""}`}>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex lg:py-0">
        <div className="fixed left-0 justify-center top-0 flex w-full pb-6 pt-8 lg:static lg:w-auto">
          <h1>Agnès Cardin</h1>
        </div>
        <div className="flex items-center justify-center">
          <LanguageButton lang={lang} setLang={setLang} darkMode={darkMode}/>
          <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode}/>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode}/>
          <div
            className="fixed bottom-0 left-0 flex pt-6 pb-8 w-full items-center justify-center lg:static lg:h-auto lg:w-auto lg:bg-none lg:py-0">
            <p className="content-center">{t("footer")}</p>
            <FontAwesomeIcon className="h-5 ml-2" icon={faHeart}/>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center">
        <Image
          className={`relative rounded-full mt-12 lg:mt-0 xl:h-1/3 xl:w-1/3 lg:w-1/2 lg:h-1/2 shadow-2xl ${boxShadow}`}
          src="/agnes.jpg"
          alt={t("photoAlt")}
          width={200}
          height={200}
          priority
        />
      </div>

      <div
        className="z-10 mb-16 max-w-48 w-full justify-between font-mono text-sm grid grid-cols-2 lg:flex lg:max-w-5xl lg:z-0">
        <MediaButton href={`/locales/${lang.startsWith("fr") ? "fr" : "en"}/agnescardin.pdf`} icon={faStar} darkMode={darkMode}/>
        <MediaButton href={`/locales/${lang.startsWith("fr") ? "fr" : "en"}/agnescardin.docx`} icon={faSave} darkMode={darkMode}/>
        <MediaButton href="https://www.linkedin.com/in/agnes-cardin" icon={faLinkedin} darkMode={darkMode}/>
        <MediaButton href="https://github.com/agnesmdev" icon={faGithub} darkMode={darkMode}/>
        <MediaButton href="https://twitter.com/agnes_cardin" icon={faTwitter} darkMode={darkMode}/>
        <MediaButton href="mailto:agnesm.dev@gmail.com" icon={faEnvelope} darkMode={darkMode}/>
      </div>
    </main>
  );
}
