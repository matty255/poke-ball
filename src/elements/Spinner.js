import React from "react";
import tw from "tailwind-styled-components";
import pika from "../static/pika.gif";

const Spinner = () => {
  return (
    <div
      className="bg-yellow-400 w-screen h-screen fixed top-0 left-0 dark:bg-gray-700
      md:dark:bg-gradient-radial from-yellow-200 via-gray-800 to-gray-900
    "
    >
      <Outter>
        <img src={pika} alt="" />
      </Outter>
    </div>
  );
};

const Outter = tw.div`
  fixed top-0 left-0 from-yellow-200 via-transparent to-transparent md:bg-gradient-radial
  w-screen h-screen flex items-center justify-center
   z-50
`;

export default Spinner;
