import { useEffect, useState } from "react";
import { translateName } from "../hooks/useTranslateName";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";

const CatchButton = tw.button`
 border text-sm rounded-md hover:bg-blue-300 hover:text-white
 hover:border-blue-300 active:bg-yellow-200 active:border-yellow-200
 dark:text-white 
`;

const FlexBox = tw.div`
flex flex-col justify-center items-center gap-4 mt-5
`;

const PokemonShare = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const pokemonInfo = location.pathname.split("/")[2];
  const pokemonId = pokemonInfo.split("-")[0];
  const isShiny = parseInt(pokemonInfo.split("-")[1]);
  const userNickName = decodeURI(pokemonInfo.split("-")[2]);

  const [pokemon, setPokemon] = useState("");

  const pokemonShare = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
      );
      if (isShiny === 1) {
        const img = response.data.sprites?.front_shiny;
        setPokemon(img);
      } else {
        const img = response.data.sprites.front_default;
        setPokemon(img);
      }
    } catch (error) {
      console.log("포켓몬 정보가 없어요!");
    }
  };

  useEffect(() => {
    pokemonShare();
  }, []);

  return (
    <>
      <div className="mt-4 w-full h-screen">
        <div className="flex justify-center items-center flex-col gap-10">
          <h1 className="text-4xl dark:text-white text-center mt-14">
            {userNickName}님이 <br />
            {pokemon ? translateName(pokemonId) : "포켓몬"}을(를) 자랑합니다.
          </h1>

          {pokemon && (
            <div className="mx-auto flex flex-col justify-center items-center">
              <img
                src={pokemon}
                alt=""
                className="animate-bounce object-contain max-w-fit"
              />
              <p className="dark:text-white">{translateName(pokemonId)}</p>
              {isShiny === 1 ? <p className="text-yellow-400">(이로치)</p> : ""}
              <button onClick={() => navigate("/")}></button>
            </div>
          )}
        </div>
        <FlexBox>
          <CatchButton>공유하기</CatchButton>
          <CatchButton>가입하고 나도 포켓몬 잡기</CatchButton>
        </FlexBox>
      </div>
    </>
  );
};

export default PokemonShare;
