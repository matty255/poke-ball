import React from "react";
import tw from "tailwind-styled-components";
import pika from "../static/pika.gif";

const Spinner = () => {
  return (
    <Outter>
      <img
        className="text-yellow-800 motion-safe:animate-bounce fixed top-50"
        src={pika}
        alt=""
      />
    </Outter>
  );
};

const Outter = tw.div`
  fixed top-0 left-0
  w-screen h-screen flex items-center justify-center
  bg-yellow-300 z-50
`;

export default Spinner;
