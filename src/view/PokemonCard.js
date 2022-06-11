import { useContext } from "react";
import { PokemonContext } from "../hooks/PokemonContext";
import { useNavigate } from "react-router-dom";
import { translateName } from "../hooks/useTranslateName";
import { AuthContext } from "../hooks/UserContext";
import tw from "tailwind-styled-components";

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
 border text-sm rounded-md hover:bg-blue-300 hover:text-white
 hover:border-blue-300 active:bg-yellow-200 active:border-yellow-200
`;

const FlexBox = tw.div`
flex flex-row justify-center md:justify-end items-center gap-2 md:mr-5
`;

const PokemonCard = ({ pokemon, image, type }) => {
  const { pokemons, capture, captureFB } = useContext(PokemonContext);
  const { user } = useContext(AuthContext);
  let userId = user?.uid;
  let navigate = useNavigate();

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

  const youNeedToLogin = () => {
    alert("로그인하세요!");
  };

  return (
    <Card>
      <TitleName>{translateName(pokemonIndex)}</TitleName>
      <CardImage src={image} alt="" />
      {type === "capture" && userId ? (
        <>
          <FlexBox>
            <div onClick={capture(pokemon)}>
              <CatchButton
                onClick={captureFB({
                  pokemonId: pokemonIndex,
                  imgUrl: image,
                  uid: user?.uid,
                  type: 0,
                })}
              >
                그냥잡기+
              </CatchButton>
            </div>
            <CatchButton onClick={ClickToCatch}>공던지기+</CatchButton>
          </FlexBox>
        </>
      ) : (
        <>
          <FlexBox>
            <CatchButton onClick={youNeedToLogin}>그냥잡기+</CatchButton>
            <CatchButton onClick={youNeedToLogin}>공던지기+</CatchButton>
          </FlexBox>
        </>
      )}
    </Card>
  );
};

export default PokemonCard;
