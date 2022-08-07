import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi  from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n.use(HttpApi).use(initReactI18next).use(LanguageDetector).init({
    fallbackLng: "en",
    // backend: {
    //     loadPath: './locales/{{en}}/{{es}}.json'
    //   },
    react: {
        wait: true,
        useSuspense: false,
     },
});