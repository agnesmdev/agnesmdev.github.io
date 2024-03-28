import Image from "next/image";

type LanguageButtonProps = {
  lang: string,
  setLang: (language: string) => void,
  darkMode: boolean
}

export default function LanguageButton(props: LanguageButtonProps) {
  const {lang, setLang} = props;
  const hoverColor = !props.darkMode ? "hover:bg-gray-900 hover:shadow-gray-800/50" : "hover:bg-gray-300 hover:shadow-gray-200/50";

  const updateDarkMode = () => {
    setLang(lang.startsWith("fr") ? "en" : "fr");
  }

	const EnglishButton = <Image src="/icons/english.png" alt="english" width={40} height={40} />
	const FrenchButton = <Image src="/icons/french.png" alt="francais" width={40} height={40} />

  return <a onClick={updateDarkMode} className={`fixed top-5 left-8 cursor-pointer flex justify-self-center justify-center items-center rounded-full w-18 h-18 lg:w-14 lg:h-14 lg:mr-6 ${hoverColor} lg:static`}>
		{lang.startsWith("fr") ? EnglishButton : FrenchButton}
	</a>;
}