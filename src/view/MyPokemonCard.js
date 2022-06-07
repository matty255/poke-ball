import { translateName } from "../hooks/useTranslateName";
import { releasePokemon } from "../api/sandPokemon";
import { useNavigate, Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const Card = tw.div`
 rounded-md w-[14rem] md:w-52 lg:w-64 py-3 m-5 md:-ml-3 lg:-ml-2
 items-center bg-[#FFFFFF80] shadow-md 
`;

const TitleName = tw.h2`
text-xl mr-5 font-semibold tracking-wider text-right
`;

const CardImage = tw.img`
animate-bounce p-4 opacity-100 drop-shadow-2xl
`;

const CatchButton = tw.button`
 border text-sm rounded-md hover:bg-blue-300 hover:text-white
 hover:border-blue-300 active:bg-yellow-200 active:border-yellow-200
`;

const FlexBox = tw.div`
flex flex-row justify-center md:justify-end items-center gap-2 md:mr-5
`;

const MyPokemonCard = ({ uid, pokemonId, imgUrl, type, id }) => {
  let userId = uid;
  let navigate = useNavigate();

  const ClickToShare = () => {
    navigate(`/detail/${pokemonId}`, {
      state: {
        image: imgUrl,
        type: type,
        pokemonId: pokemonId,
      },
    });
  };

  return (
    <Card>
      <TitleName>{translateName(pokemonId)}</TitleName>
      <CardImage src={imgUrl} alt="" />
      <FlexBox>
        <CatchButton onClick={() => releasePokemon(id)}>놓아주기</CatchButton>
        <CatchButton onClick={ClickToShare}>공던지기+</CatchButton>
      </FlexBox>
    </Card>
  );
};

export default MyPokemonCard;
