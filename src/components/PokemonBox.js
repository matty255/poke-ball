import { useContext } from "react";
import { CapturedPokemons } from "../api/getCapturedPokemon";
import { AuthContext } from "../hooks/UserContext";

const PokemonBox = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {!user ? (
        <div
          className="flex justify-center flex-col md:flex-row bg-shiny-pattern bg-repeat-y
        h-screen"
        >
          <p className="text-2xl p-6 dark:text-white">
            "로그인하고 포켓몬을 모아보세요!"
          </p>
        </div>
      ) : (
        <>
          <div className="flex justify-center flex-col md:flex-row bg-shiny-pattern bg-repeat-y">
            <h1 className="text-4xl p-8 lg:p-4 mb-5 overline decoration-sky-300 mx-auto dark:text-white">
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
