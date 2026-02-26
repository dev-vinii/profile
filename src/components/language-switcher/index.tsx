import { useTranslation } from "react-i18next";

const languages = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
] as const;

interface LanguageSwitcherProps {
  dark?: boolean;
}

export function LanguageSwitcher({ dark }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const activeColor = dark ? "#1B1916" : "#EDE8DB";

  return (
    <div className="fixed top-5 right-5 z-10 flex items-center">
      {languages.map(({ code, label }, i) => (
        <span key={code} className="flex items-center">
          <button
            onClick={() => i18n.changeLanguage(code)}
            className="cursor-pointer transition-all px-1.5 py-1"
            style={{
              fontFamily: "'Syne Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.12em",
              color: activeColor,
              opacity: i18n.language === code ? 1 : 0.25,
              fontWeight: i18n.language === code ? 700 : 400,
            }}
          >
            {label}
          </button>
          {i < languages.length - 1 && (
            <span
              style={{
                color: activeColor,
                opacity: 0.15,
                fontSize: "8px",
                fontFamily: "'Syne Mono', monospace",
              }}
            >
              /
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
