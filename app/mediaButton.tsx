import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type MediaButtonProps = {
  href: string,
  icon: IconProp,
  darkMode: boolean
}

export default function MediaButton(props: MediaButtonProps) {
  const hoverColor = props.darkMode ? "hover:bg-gray-900 hover:shadow-gray-800/50" : "hover:bg-gray-300 hover:shadow-gray-200/50";
  return <a
    target="_blank"
    className={`flex justify-self-center justify-center items-center rounded-full w-18 h-18 lg:w-36 lg:h-36 shadow-gra hover:shadow-lg ${hoverColor}`}
    href={props.href}>
    <FontAwesomeIcon className="h-10 m-4 lg:h-24 lg:m-0" icon={props.icon}/>
  </a>
}