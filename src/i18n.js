// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import JSON directly from src (no network requests)
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationAR from "./locales/ar/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
      ar: { translation: translationAR },
    },
    lng: "en",
    fallbackLng: "en",
    debug: true,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

export default i18n;
