import { useTranslation } from "react-i18next";

const links = [
  {
    label: "Email",
    value: "viniciusluna@yahoo.com",
    href: "mailto:viniciusluna@yahoo.com",
  },
  {
    label: "LinkedIn",
    value: "viniciusluna17",
    href: "https://www.linkedin.com/in/viniciusluna17/",
  },
  {
    label: "GitHub",
    value: "viniciusluna",
    href: "https://github.com/viniciusluna",
  },
];

export function Contact() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-10 px-10 py-16">
      <h1 className="text-4xl md:text-5xl font-bold">{t("contact.title")}</h1>

      <div className="flex flex-col gap-4 items-center">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg opacity-70 hover:opacity-100 transition-opacity underline underline-offset-4"
          >
            {link.label}: {link.value}
          </a>
        ))}
      </div>

      <p className="text-sm opacity-40">{t("contact.location")}</p>
    </div>
  );
}
