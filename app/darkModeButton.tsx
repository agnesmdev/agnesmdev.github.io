import Image from "next/image";

type DarkModeButtonProps = {
  darkMode: boolean,
  setDarkMode: (darkMode: boolean) => void
}

export default function DarkModeButton(props: DarkModeButtonProps) {
  const {darkMode, setDarkMode} = props;

  const updateDarkMode = () => {
    setDarkMode(!darkMode);
  }

	const LightButton = <Image src="/icons/night.png" alt="dark mode" width={40} height={40} />
	const DarkButton = <Image src="/icons/light.png" alt="light mode" width={40} height={40} />

  return <a onClick={updateDarkMode} className="fixed top-5 right-8 cursor-pointer flex justify-self-center justify-center items-center rounded-full w-18 h-18 hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-600/50 lg:hidden">
		{darkMode ? DarkButton : LightButton}
	</a>;
}