import { useEffect, useState, useContext } from "react";
import { translateName, FindGenus } from "../hooks/useTranslateName";
import { useNavigate, useLocation } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { SignIn } from "../api/authLogInAndOut";
import { LangContext } from "../hooks/LangContext";
import { useTranslation } from "react-i18next";

import axios from "axios";
import tw from "tailwind-styled-components";
import C from "../static/shareIcon.png";
import ToggleDark from "../elements/ToggleDark";
import ToggleLang from "../elements/ToggleLang";

const PokemonShare = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const { t } = useTranslation();
  const { lang } = useContext(LangContext);
  const currentUrl = window.location.href;
  const pokemonInfo = location.pathname.split("/")[2];
  const pokemonId = pokemonInfo.split("-")[0];
  const isShiny = parseInt(pokemonInfo.split("-")[1]);
  const userNickName = decodeURI(pokemonInfo.split("-")[2]);

  const pokemonName =
    lang === "en-US"
      ? translateName(pokemonId, 2)
      : translateName(pokemonId, 3);
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
      <OuterBox>
        <div className="flex flex-row gap-3 pl-3">
          <ToggleDark />
          <ToggleLang />
        </div>

        <div className="flex justify-center items-center flex-col gap-10">
          <h1 className="text-4xl dark:text-white text-center mt-14 mx-10">
            {t("share_page", {
              user_name: userNickName,
              user_pokemon: pokemonName,
            })}
          </h1>

          {pokemon && (
            <div className="mx-auto flex flex-col justify-center items-center">
              <img
                src={pokemon}
                alt=""
                className="animate-bounce object-contain w-36"
              />
              <Title>
                {lang === "en-US"
                  ? translateName(pokemonId, 2)
                  : translateName(pokemonId, 3)}
              </Title>
              <SubTitle>
                {lang === "en-US"
                  ? FindGenus(pokemonId, 2)
                  : FindGenus(pokemonId, 3)}
              </SubTitle>
              {isShiny === 1 ? (
                <p className="text-yellow-400 drop-shadow-md">{t("shiny")}</p>
              ) : (
                ""
              )}
              <button onClick={() => navigate("/")}></button>
            </div>
          )}
        </div>
        <FlexBox>
          <SignIn />
          <ShareBox>
            <CopyToClipboard text={currentUrl}>
              <img
                className="w-8 mt-1 cursor-pointer"
                onClick={() => alert(t("copy"))}
                src={C}
                alt=""
              />
            </CopyToClipboard>
          </ShareBox>
        </FlexBox>
      </OuterBox>
    </>
  );
};

export default PokemonShare;

const FlexBox = tw.div`
flex flex-row justify-center items-center gap-4 mt-5
`;

const ShareBox = tw.div`
flex flex-row gap-2 text-lg border rounded-full hover:bg-yellow-300 hover:text-white
cursor-pointer active:bg-yellow-200 active:border-yellow-200
`;

const SubTitle = tw.h2`
dark:text-white justify-center text-lg -mt-2
 font-bold decoration-double tracking-tight drop-shadow-md
`;

const Title = tw.h1`
dark:text-white justify-center text-4xl p-4 decoration-current overline
 font-bold tracking-widest decoration-double
whitespace-pre-wrap drop-shadow-md
`;

const OuterBox = tw.div`
mt-4 w-full h-screen bg-share-pattern
`;
