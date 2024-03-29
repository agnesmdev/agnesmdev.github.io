import translationFr from "@/public/locales/fr/translation.json";
import translationEn from "@/public/locales/en/translation.json";

export default function t(lang: string, text: string) {
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