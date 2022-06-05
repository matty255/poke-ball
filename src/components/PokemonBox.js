import { useState, useContext } from "react";
import { PokemonContext } from "../hooks/usePokemonContext";
import PokemonCard from "../view/PokemonCard";

const PokemonBox = () => {
  const { capturedPokemons } = useContext(PokemonContext);

  return (
    <>
      <div className="mx-auto text-right">
        <h2>포켓몬 박스</h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center">
        {capturedPokemons.length > 0 &&
          capturedPokemons.map((pokemon, i) => {
            const pokemonIndex =
              pokemon.url.split("/")[pokemon.url.split("/").length - 2];
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
            return (
              <div key={`${i}-${pokemon.name}`}>
                <PokemonCard pokemon={pokemon} image={image} type="release" />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default PokemonBox;
