import { useState, useContext } from "react";
import { PokemonContext } from "./PokemonContext";

const PokemonBox = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);

  return (
    <div className="pokemon-box">
      <h2>포켓몬 박스</h2>

      {capturedPokemons.map((pokemon) => (
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
          <button onClick={release(pokemon)}>놓아주기-</button>
        </div>
      ))}
    </div>
  );
};

export default PokemonBox;
