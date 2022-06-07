import { useState, useContext } from "react";
import { CapturedPokemons } from "../api/getCapturedPokemon";
import { AuthContext } from "../hooks/UserContext";

const PokemonBox = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {!user ? (
        <p>"로그인하세요!"</p>
      ) : (
        <>
          <div className="flex justify-center flex-col md:flex-row">
            <h1 className="text-4xl p-8 lg:p-4 mb-5 overline decoration-sky-300 mx-auto">
              포켓몬 박스
            </h1>
            {CapturedPokemons()}
          </div>
          <div className="flex justify-center items-center mx-auto"></div>
        </>
      )}
    </>
  );
};

export default PokemonBox;
