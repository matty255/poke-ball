import { useState, useEffect, useContext, useRef } from "react";
import { PokemonContext } from "../hooks/usePokemonContext";
import { useNavigate } from "react-router-dom";
import { translateName } from "../hooks/useTranslateName";

const PokemonCard = ({ pokemon, image, type }) => {
  const { pokemons, capture, release, addPokemons } =
    useContext(PokemonContext);
  let navigate = useNavigate();
  const pokemonIndex =
    pokemon.url.split("/")[pokemon.url.split("/").length - 2];

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
  return (
    <div className="p-4 m-2 border border-gray-400 rounded-md bg-white flex items-center flex-col w-40">
      <div>
        <p>{translateName(pokemonIndex)}</p>
        <img src={image} alt="" className="animate-bounce" />
        {type === "capture" ? (
          <button onClick={capture(pokemon)}>추가+</button>
        ) : (
          <button onClick={release(pokemon)}>풀어주기+</button>
        )}
      </div>
      <button onClick={ClickToResult}>자세히</button>
    </div>
  );
};

export default PokemonCard;
