import { createContext, useState, useEffect } from "react";

export const LangContext = createContext();

const initialLang = window.navigator.language;
export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    setLang(lang);
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
