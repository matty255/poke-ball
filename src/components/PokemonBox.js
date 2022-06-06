import { useState, useContext } from "react";
import { CapturedPokemons } from "../api/getCapturedPokemon";
import { AuthContext } from "../hooks/UserContext";

const PokemonBox = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {!user ? (
        <p>"로그인하세요!"</p>
      ) : (
        <>
          <div className="mx-auto text-right">
            <h2>포켓몬 박스</h2>
          </div>
          <div className="flex flex-row flex-wrap ">{CapturedPokemons()}</div>
        </>
      )}
    </div>
  );
};

export default PokemonBox;
