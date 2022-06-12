import { translateName } from "../hooks/useTranslateName";
import { releasePokemon } from "../api/postAndDeletePokemon";
import { useNavigate, Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useTranslation } from "react-i18next";
import { LangContext } from "../hooks/LangContext";
import { useContext, setState } from "react";
import Swal from "sweetalert2";
const Card = tw.div`
 rounded-md w-[12rem] py-3 m-5 md:-ml-3
 items-center bg-[#FFFFFF80] shadow-md 
`;

const TitleName = tw.h2`
text-xl mr-5 font-semibold tracking-wider text-right
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

const MyPokemonCard = ({ pokemonId, imgUrl, type, id }) => {
  let navigate = useNavigate();
  const { t } = useTranslation();
  const { lang, setLang } = useContext(LangContext);

  const ClickToShare = () => {
    Swal.fire({
      title: t("title_your_name"),
      text: t("type_your_name"),
      input: "text",
      showCancelButton: true,
    }).then((result) => {
      if (result?.value) {
        navigate(`/share/${pokemonId}-${type}-${result.value}`);
      }
    });
  };

  return (
    <Card>
      <TitleName>
        {lang === "en-US"
          ? translateName(pokemonId, 2)
          : translateName(pokemonId, 3)}
      </TitleName>
      <CardImage src={imgUrl} alt="" />
      <FlexBox>
        <CatchButton onClick={() => releasePokemon(id)}>
          {t("release")}
        </CatchButton>
        <CatchButton onClick={ClickToShare}>{t("share_to_friend")}</CatchButton>
      </FlexBox>
    </Card>
  );
};

export default MyPokemonCard;
