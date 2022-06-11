import { useContext } from "react";
import { CapturedPokemons } from "../api/getCapturedPokemon";
import { AuthContext } from "../hooks/UserContext";
import ToggleDark from "../elements/ToggleDark";
import ToggleLang from "../elements/ToggleLang";

const PokemonBox = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="flex flex-row p-3 gap-3 bg-sky-300 dark:bg-sky-600">
        <ToggleDark />
        <ToggleLang />
      </div>
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
          <div className="flex justify-center flex-col md:flex-row bg-shiny-pattern bg-repeat-y min-h-screen">
            <h1 className="text-4xl p-4 mb-5 overline decoration-sky-300 mx-auto dark:text-white md:w-36">
              포켓몬 <br className="hidden md:content" />
              박스
            </h1>

            {CapturedPokemons()}
          </div>
        </>
      )}
    </>
  );
};

export default PokemonBox;
