import { useTranslation } from "react-i18next";
import i18n from "i18next";

export const onChangeLang = (lang) => {
  i18n.changeLanguage(lang);
};
