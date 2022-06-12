import { useContext } from "react";
import { CapturedPokemons } from "../api/getCapturedPokemon";
import { AuthContext } from "../hooks/UserContext";
import ToggleDark from "../elements/ToggleDark";
import ToggleLang from "../elements/ToggleLang";
import { useTranslation } from "react-i18next";
import tw from "tailwind-styled-components";
import MyPokemonCard from "../view/MyPokemonCard";

const Card = tw.div`
 rounded-md w-[12rem] py-3 m-5 md:-ml-3 h-44
 items-center bg-[#FFFFFF80] shadow-md 
`;

const PokemonBox = () => {
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();
  const { value, loading, error, capturedPokemonList } = CapturedPokemons();

  let userId = user?.uid;
  return (
    <>
      <div className="flex flex-row p-3 gap-3 bg-sky-300 dark:bg-sky-600">
        <ToggleDark />
        <ToggleLang />
      </div>
      {!user && (
        <div
          className="flex justify-center flex-col md:flex-row bg-shiny-pattern bg-repeat-y
        h-screen"
        >
          <p className="text-2xl p-6 dark:text-white">
            {t("log_in_and_capture_pokemons")}
          </p>
        </div>
      )}
      {user && (
        <>
          <div className="flex justify-center flex-col md:flex-row bg-shiny-pattern bg-repeat-y min-h-screen">
            <h1 className="text-4xl p-4 mb-5 overline decoration-sky-300 mx-auto lg:mr-auto dark:text-white md:w-14">
              {t("pokemon_box")}
            </h1>

            <div className="">
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-end md:ml-4">
                {value && (
                  <>
                    {value.docs.map((doc) => (
                      <div key={doc.id}>
                        {userId && userId === doc.data().uid ? (
                          <>
                            <MyPokemonCard
                              pokemonId={doc.data().pokemonId}
                              imgUrl={doc.data().imgUrl}
                              type={doc.data().type}
                              id={doc.id}
                            />
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
              {capturedPokemonList <= 4 && (
                <div className="flex justify-center lg:justify-end flex-row flex-wrap items-center">
                  <Card />
                  <Card />
                  <Card />
                </div>
              )}

              <p className="text-center text-pink-400 text-lg dark:text-white w-full p-10">
                {t("capture_pokemon_putting_in_the_box")}
              </p>
              {error && <strong>에러가 발생했습니다.</strong>}
              {loading && <span>Collection: Loading...</span>}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PokemonBox;
