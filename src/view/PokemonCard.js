import { useContext, useRef } from "react";
import { PokemonContext } from "../hooks/usePokemonContext";
import { useNavigate, Link } from "react-router-dom";
import { translateName } from "../hooks/useTranslateName";
import { AuthContext } from "../hooks/UserContext";
import tw from "tailwind-styled-components";

const Card = tw.div`
border-2 border-yellow-400 border-dashed rounded-md md:w-60 lg:w-64
 items-center bg-[#FFFFFF80] shadow-md
`;

const CardImage = tw.img`
animate-bounce p-4 opacity-100 drop-shadow-2xl
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
      <p>{translateName(pokemonIndex)}</p>
      <CardImage src={image} alt="" />
      {type === "capture" && userId ? (
        <>
          <button onClick={capture(pokemon)}>
            <button
              onClick={captureFB({
                pokemonId: pokemonIndex,
                imgUrl: image,
                uid: user?.uid,
              })}
            >
              그냥잡기+
            </button>
          </button>
          <button onClick={ClickToCatch}>공던지기+</button>
        </>
      ) : (
        <>
          <button onClick={youNeedToLogin}>그냥잡기+</button>
          <button onClick={youNeedToLogin}>공던지기+</button>
        </>
      )}
    </Card>
  );
};

export default PokemonCard;
