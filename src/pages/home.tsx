import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 px-6">
      <h1 className="text-5xl md:text-7xl font-bold text-center">
        Vinicius Luna
      </h1>
      <p className="text-lg md:text-xl opacity-60">{t("home.role")}</p>
      <p className="text-sm opacity-40 mt-2">{t("home.location")}</p>
    </div>
  );
}
