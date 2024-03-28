type BackgroundProps = {
  lang: string,
  darkMode: boolean
}

export default function Background (props: BackgroundProps) {
  const darkMode = props.darkMode ? "dark" : "light";
  const className = `bg-${props.lang.substring(0, 2)}-${darkMode}`;
  return <>
    <div className={className}></div>
    <div className={`${className} bg2`}></div>
    <div className={`${className} bg3`}></div>
  </>
}