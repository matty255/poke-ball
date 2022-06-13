import { useContext } from "react";
import { AuthContext } from "../hooks/UserContext";
import ToggleDark from "../elements/ToggleDark";
import ToggleLang from "../elements/ToggleLang";
import { useTranslation } from "react-i18next";
import { CapturedPokemons } from "../api/getCapturedPokemon";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import MyPokemonCard from "../view/MyPokemonCard";
import { deleteUserButton, logout } from "../api/authLogInAndOut";

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
        {user && (
          <>
            <Link
              to="/"
              className="p-2 md:p-4 text-sm md:text-base flex items-end  text-white drop-shadow-lg"
              onClick={logout}
            >
              로그아웃
            </Link>
            <button
              onClick={() => deleteUserButton(user)}
              className="p-2 md:p-4 text-sm md:text-base flex items-end  text-white drop-shadow-lg"
            >
              탈퇴
            </button>
          </>
        )}
      </div>
      {!user && (
        <OuterBox className="h-screen">
          <p className="text-2xl p-6 dark:text-white">
            {t("log_in_and_capture_pokemons")}
          </p>
        </OuterBox>
      )}
      {user && (
        <>
          <OuterBox>
            <Title>{t("pokemon_box")}</Title>

            <div>
              <InnerBox>
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
              </InnerBox>
              {capturedPokemonList <= 4 && (
                <div className="flex justify-center lg:justify-end flex-row flex-wrap items-center">
                  <Card />
                  <Card />
                  <Card />
                </div>
              )}

              <SubTitle>{t("capture_pokemon_putting_in_the_box")}</SubTitle>
              {error && <strong>에러가 발생했습니다.</strong>}
              {loading && <span>Collection: Loading...</span>}
            </div>
          </OuterBox>
        </>
      )}
    </>
  );
};

export default PokemonBox;

const Card = tw.div`
 rounded-md w-[12rem] py-3 m-5 md:-ml-3 h-44
 items-center bg-[#FFFFFF80] shadow-md 
`;

const OuterBox = tw.div`
flex justify-center flex-col md:flex-row bg-shiny-pattern bg-repeat-y min-h-screen
`;

const Title = tw.h1`
text-4xl p-4 mb-5 overline decoration-sky-300 mx-auto lg:mr-auto dark:text-white md:w-14
`;

const InnerBox = tw.div`
flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-end md:ml-4
`;

const SubTitle = tw.p`
text-center text-pink-400 text-lg dark:text-white w-full p-10
`;
