import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LANGUAGE_FOR_OS } from "../types";

import localeKO from "./lang/lang_ko.json";
import localeEN from "./lang/lang_en.json";

const resource = {
  [LANGUAGE_FOR_OS.EN]: { translation: localeEN },
  [LANGUAGE_FOR_OS.KO]: { translation: localeKO },
};

const init = (lang) => {
  i18n.use(initReactI18next).init({
    resources: resource,
    fallbackLng: "ko-KR",
    debug: true,
    interpolation: {
      escapeValue: true,
      prefix: "{",
      suffix: "}",
    },
    lng: lang,
  });
};

export default init;
