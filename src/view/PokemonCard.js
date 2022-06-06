import { useState, useEffect, useContext, useRef } from "react";
import { PokemonContext } from "../hooks/usePokemonContext";
import { useNavigate } from "react-router-dom";
import { translateName } from "../hooks/useTranslateName";
import { AuthContext } from "../hooks/UserContext";

const PokemonCard = ({ pokemon, image, type }) => {
  const { pokemons, capture, release, addPokemons, captureFB } =
    useContext(PokemonContext);
  const { user } = useContext(AuthContext);
  let userId = user?.uid;
  let navigate = useNavigate();
  const pokemonIndex =
    pokemon?.url.split("/")[pokemon.url.split("/").length - 2];

  const ClickToResult = () => {
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
          <button onClick={capture(pokemon)}>
            <button
              onClick={captureFB({
                pokemonId: pokemonIndex,
                imgUrl: image,
                uid: user?.uid,
              })}
            >
              추가+
            </button>
          </button>
        ) : (
          <button onClick={youNeedToLogin}>추가+</button>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
