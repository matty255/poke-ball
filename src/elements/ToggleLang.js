import { useState, useContext } from "react";
import tw from "tailwind-styled-components";
import "./Toggle.css";
import KoreaIcon from "../static/koreaIcon.png";
import UsaIcon from "../static/usaIcon.png";
import i18n from "i18next";
import { LangContext } from "../hooks/LangContext";

const Toggle = () => {
  const { lang, setLang } = useContext(LangContext);
  const [isChecked, setIsChecked] = useState(lang === "ko-KR" ? false : true);

  const handleChange = () => {
    setIsChecked((isChecked) => !isChecked);
    setLang(lang === "ko-KR" ? "en-US" : "ko-KR");
  };

  return (
    <Outter>
      <div className="flex items-center justify-center w-full drop-shadow-md">
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleB"
              onChange={handleChange}
              onClick={() =>
                i18n.changeLanguage(isChecked === false ? "en-US" : "ko-KR")
              }
              className="sr-only peer"
            />

            <div className="block bg-gray-500 w-14 h-8 rounded-full"></div>

            <div
              className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition peer-checked:bg-blue-400
            "
            >
              {isChecked ? (
                <img src={UsaIcon} alt="" className="brightness-110" />
              ) : (
                <img src={KoreaIcon} alt="" />
              )}
            </div>
          </div>
        </label>
      </div>
    </Outter>
  );
};

const Outter = tw.div`

`;

export default Toggle;
