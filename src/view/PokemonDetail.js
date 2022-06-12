import { useState, useEffect, useContext } from "react";
import { PokemonContext } from "../hooks/PokemonContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useGenerateNumber } from "../hooks/useGenerateNumber";
import axios from "axios";
import { translateName, FindGenus } from "../hooks/useTranslateName";
import { AuthContext } from "../hooks/UserContext";
import { LangContext } from "../hooks/LangContext";
import { useTranslation } from "react-i18next";
import tw from "tailwind-styled-components";

const SubTitle = tw.h2`
dark:text-white justify-center text-lg -mb-2
 font-bold decoration-double tracking-tight
`;

const Title = tw.h1`
dark:text-white justify-center text-4xl p-4 mb-4 decoration-current overline
animate-pulse delay-150 ease-out font-bold tracking-widest decoration-double
whitespace-pre-wrap
`;

const CardBox = tw.div`
p-4 m-2 border-4 border-double border-gray-400 rounded-md flex items-center flex-col h-screen 
`;

const MenuBox = tw.div`
p-5 m-2 border-4 border-double border-gray-400 rounded-md 
w-full h-fit
`;

const MenuText = tw.p`
dark:text-white justify-center text-right text-3xl
`;

const MenuButton = tw.button`
dark:text-white justify-center text-2xl
p-1 group active:text-amber-500 text-gray-500
hover:dark:text-gray-200 hover:text-gray-800
`;

const ButtonBox = tw.div`
flex justify-end items-end flex-col
`;

const SerectTri = tw.span`
delay-200 ease-in-out opacity-0 group-hover:opacity-100 text-xl
`;

const ShinyAppeared = tw.span`
absolute top-72 text-4xl tracking-wider text-yellow-300 
animate-shiny delay-100
`;

const PokemonDetail = () => {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);
  const { captureFB } = useContext(PokemonContext);
  let location = useLocation();
  let navigate = useNavigate();
  const num_Shiny = useGenerateNumber(1, 10);
  const [detail, setDetail] = useState({});
  const { lang, setLang } = useContext(LangContext);
  const data = location.state;
  const url = data.pokemon.url;
  const id = data.pokemonId;

  const callDetail = async () => {
    try {
      const response = await axios.get(url);
      // console.log(response.data);
      if (num_Shiny > 6) {
        const img = response.data.sprites?.front_shiny;
        setDetail({ id, img, num_Shiny, type: 1 });
      } else {
        const img = response.data.sprites.front_default;
        setDetail({ id, img, type: 0 });
      }
    } catch (error) {
      console.log("포켓몬 정보가 없어요!");
    }
  };

  useEffect(() => {
    callDetail();
  }, []);

  return (
    <>
      <CardBox>
        {detail.num_Shiny > 2 && <ShinyAppeared>{t("getShiny")}</ShinyAppeared>}
        <SubTitle>
          {" "}
          {lang === "en-US" ? FindGenus(id, 2) : FindGenus(id, 3)}
        </SubTitle>

        <Title>
          {lang === "en-US" ? translateName(id, 2) : translateName(id, 3)}
        </Title>
        <img src={detail.img} alt="" className="animate-bounce w-36" />

        <MenuBox>
          <MenuText>
            {t("summon", {
              name:
                lang === "en-US" ? translateName(id, 2) : translateName(id, 3),
            })}
          </MenuText>
          <ButtonBox>
            <MenuButton onClick={() => navigate("/poke-box")}>
              <div
                onClick={captureFB({
                  pokemonId: detail.id,
                  imgUrl: detail.img,
                  uid: user?.uid,
                  type: detail.type,
                })}
              >
                <SerectTri>▶ </SerectTri>
                {t("capture_with_ball")}
              </div>
            </MenuButton>
            <MenuButton onClick={() => navigate(-1)}>
              <SerectTri>▶ </SerectTri>
              {t("goBack")}
            </MenuButton>
          </ButtonBox>
        </MenuBox>
      </CardBox>
    </>
  );
};

export default PokemonDetail;
