import React from "react";

export const LangContext = React.createContext();

const initialLang = window.navigator.language;
export const LangProvider = ({ initialTheme, children }) => {
  const [lang, setLang] = React.useState(initialLang);

  React.useEffect(() => {
    setLang(lang);
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
