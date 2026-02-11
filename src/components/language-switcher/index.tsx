import { useTranslation } from "react-i18next";

const languages = [
  { code: "pt", flag: "🇧🇷" },
  { code: "en", flag: "🇺🇸" },
  { code: "es", flag: "🇪🇸" },
] as const;

interface LanguageSwitcherProps {
  dark?: boolean;
}

export function LanguageSwitcher({ dark }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();

  return (
    <div className="absolute top-4 right-4 z-10 flex gap-2">
      {languages.map(({ code, flag }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          className={`text-xl cursor-pointer transition-all ${
            i18n.language === code
              ? "opacity-100 scale-110"
              : `opacity-40 hover:opacity-70 ${dark ? "grayscale" : "grayscale"}`
          }`}
        >
          {flag}
        </button>
      ))}
    </div>
  );
}
