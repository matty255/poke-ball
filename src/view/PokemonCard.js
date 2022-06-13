import tw from "tailwind-styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { translateName } from "../hooks/useTranslateName";
import { useGenerateNumber } from "../hooks/useGenerateNumber";
import { LangContext } from "../hooks/LangContext";
import { PokemonContext } from "../hooks/PokemonContext";
import { AuthContext } from "../hooks/UserContext";

const PokemonCard = ({ pokemon, image, type }) => {
  const { t } = useTranslation();
  const { capture, captureFB } = useContext(PokemonContext);
  const { user } = useContext(AuthContext);
  const { lang } = useContext(LangContext);

  let navigate = useNavigate();
  let percent = useGenerateNumber(1, 100);

  const pokemonIndex =
    pokemon?.url.split("/")[pokemon.url.split("/").length - 2];

  const ClickToCatch = () => {
    navigate(`/detail/${pokemonIndex}`, {
      state: {
        pokemon: pokemon,
        image: image,
        type: type,
        pokemonId: pokemonIndex,
      },
    });
  };

  const JustCatch = () => {
    let prob = percent * 0.01;

    let ran = Math.random();
    if (prob > ran) {
      alert(
        t("capture", {
          capture:
            lang === "en-US"
              ? translateName(pokemonIndex, 2)
              : translateName(pokemonIndex, 3),
        })
      );
      return captureFB({
        pokemonId: pokemonIndex,
        imgUrl: image,
        uid: user?.uid,
        type: 0,
      });
    } else {
      alert(
        t("capture_failed", {
          capture:
            lang === "en-US"
              ? translateName(pokemonIndex, 2)
              : translateName(pokemonIndex, 3),
        })
      );
    }
  };

  const youNeedToLogin = () => {
    alert("로그인하세요!");
  };

  return (
    <Card>
      <TitleName>
        {lang === "en-US" ? pokemon.name : translateName(pokemonIndex, 3)}
      </TitleName>
      <p className="text-right mr-4">
        {t("catch_rate")} {parseInt(percent)}%
      </p>
      <CardImage src={image} alt="" />
      {type === "capture" && user?.uid ? (
        <>
          <FlexBox>
            <div onClick={capture(pokemon)}>
              <CatchButton onClick={() => JustCatch(percent)}>
                {t("just_capture")}
              </CatchButton>
            </div>
            <CatchButton onClick={ClickToCatch}>
              {t("capture_with_ball")}
            </CatchButton>
          </FlexBox>
        </>
      ) : (
        <>
          <FlexBox>
            <CatchButton onClick={youNeedToLogin}>
              {t("just_capture")}
            </CatchButton>
            <CatchButton onClick={youNeedToLogin}>
              {t("capture_with_ball")}
            </CatchButton>
          </FlexBox>
        </>
      )}
    </Card>
  );
};

export default PokemonCard;

const Card = tw.div`
 rounded-md md:w-60 lg:w-64 py-3 mb-1
 items-center bg-[#FFFFFF90] dark:brightness-110 shadow-md dark:drop-shadow-xl
`;

const TitleName = tw.h2`
text-xl mr-5 font-semibold tracking-wider
`;

const CardImage = tw.img`
animate-bounce p-4 opacity-100 drop-shadow-2xl
`;

const CatchButton = tw.button`
 border text-sm rounded-md hover:bg-blue-300 hover:text-white px-1 mx-1 lg:px-0 lg:mx-0
 hover:border-blue-300 active:bg-yellow-200 active:border-yellow-200
`;

const FlexBox = tw.div`
flex flex-row justify-center md:justify-end items-center gap-2 md:mr-5
`;
