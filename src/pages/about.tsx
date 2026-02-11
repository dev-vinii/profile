import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 px-10 py-16 max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold">{t("about.title")}</h1>

      <p className="text-base md:text-lg leading-relaxed text-center opacity-80">
        {t("about.summary")}
      </p>

      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-2xl font-semibold">{t("about.educationTitle")}</h2>
        <div className="flex flex-col gap-2 opacity-80">
          <div>
            <p className="font-medium">{t("about.mba")}</p>
            <p className="text-sm opacity-60">{t("about.mbaSchool")}</p>
          </div>
          <div>
            <p className="font-medium">{t("about.degree")}</p>
            <p className="text-sm opacity-60">{t("about.degreeSchool")}</p>
          </div>
        </div>
      </div>

      <p className="text-sm opacity-40">{t("about.english")}</p>
    </div>
  );
}
