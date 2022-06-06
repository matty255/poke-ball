import React, { createContext } from "react";
import { usePokemonReducer } from "./usePokemonReducer";
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS } from "./actions";
import { savePokemon, releasePokemon } from "../api/sandPokemon";
const PokemonContext = createContext();

const PokeProvider = (props) => {
  const [state, dispatch] = usePokemonReducer();
  const { pokemons, capturedPokemons } = state;

  const capture = (pokemon) => () => dispatch({ type: CAPTURE, pokemon });
  const captureFB =
    ({ pokemonId, imgUrl, uid }) =>
    () =>
      savePokemon({ pokemonId: pokemonId, imgUrl: imgUrl, uid: uid });
  const releaseFB = (id) => () => releasePokemon(id);
  const release = (pokemon) => () => dispatch({ type: RELEASE, pokemon });
  const addPokemon = (pokemon) => dispatch({ type: ADD_POKEMON, pokemon });
  const addPokemons = (pokemons) => dispatch({ type: ADD_POKEMONS, pokemons });

  const providerValue = {
    pokemons,
    capturedPokemons,
    capture,
    release,
    addPokemon,
    addPokemons,
    captureFB,
    releaseFB,
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokeProvider };
