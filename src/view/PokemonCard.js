import { useState, useEffect, useContext, useRef } from "react";
import { PokemonContext } from "../components/PokemonContext";

const PokemonCard = ({ pokemon, image }) => {
  const { pokemons, capture, addPokemons } = useContext(PokemonContext);

  return (
    <div className="p-4 m-2 border border-gray-400 rounded-md bg-white flex items-center flex-col w-40">
      <div>
        <p>{pokemon.id}</p>
        <p>{pokemon.name}</p>
        <img src={image} alt="" />
        <button onClick={capture(pokemon)}>추가+</button>
      </div>

      <div>
        {/* <p className="text-base font-bold">{data.title}</p>
        <p className="text-sm text-gray-800">{data.contents}</p> */}
      </div>
    </div>
  );
};

export default PokemonCard;
