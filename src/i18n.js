import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './locales/en.json';
import jp from './locales/jp.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      jp: {
        translation: jp,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // react already does escaping
    },
  });
export default i18n;