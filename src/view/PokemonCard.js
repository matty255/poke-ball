import { useContext, useRef } from "react";
import { PokemonContext } from "../hooks/usePokemonContext";
import { useNavigate, Link } from "react-router-dom";
import { translateName } from "../hooks/useTranslateName";
import { AuthContext } from "../hooks/UserContext";

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
    <div className="p-4 m-2 border border-gray-400 rounded-md bg-white flex items-center flex-col w-40">
      <div>
        <p>{translateName(pokemonIndex)}</p>
        <img src={image} alt="" className="animate-bounce" />
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
      </div>
    </div>
  );
};

export default PokemonCard;
