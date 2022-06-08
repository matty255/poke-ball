import { useState, useContext, useEffect } from "react";
import tw from "tailwind-styled-components";
import "./Toggle.css";
import DarkmodeIcon from "../static/darkmodeIcon.png";
import SunIcon from "../static/sunIcon.png";
import { DarkContext } from "../hooks/DarkContext";

const ToggleDark = (darkMode, setDarkMode) => {
  const { theme, setTheme } = useContext(DarkContext);

  const [isChecked, setIsChecked] = useState(theme === "dark" ? true : false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Outter>
      <div className="flex items-center justify-center w-full drop-shadow-md">
        <label htmlFor="toggleA" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleA"
              checked={isChecked}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="block bg-gray-500 w-14 h-8 rounded-full"></div>

            <div
              className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition peer-checked:bg-purple-600
            "
            >
              {isChecked ? (
                <img src={DarkmodeIcon} alt="" />
              ) : (
                <img src={SunIcon} alt="" />
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

export default ToggleDark;
