import { getFirestore, collection } from "firebase/firestore";
import { app } from "../api/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { AuthContext } from "../hooks/UserContext";
import { useContext } from "react";
import MyPokemonCard from "../view/MyPokemonCard";
import tw from "tailwind-styled-components";
import { useTranslation } from "react-i18next";

const Card = tw.div`
 rounded-md w-[12rem] lg:w-[14rem] py-3 m-5 md:-ml-3 lg:-ml-2
 items-center bg-[#FFFFFF80] shadow-md h-44
`;
export const CapturedPokemons = () => {
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();
  let userId = user?.uid;
  const [value, loading, error] = useCollection(
    collection(getFirestore(app), "pokemon"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const capturedPokemonList = value?.docs.filter(
    (doc) => doc.data().uid === userId
  );

  return (
    <div className="">
      <div className="flex flex-col sm:flex-row flex-wrap items-center sm:justify-around md:justify-start md:ml-4">
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
      {capturedPokemonList <= 0 && (
        <div className="flex justify-center flex-col md:flex-row items-center">
          <Card />
          <Card />
          <Card />
        </div>
      )}

      <p className="text-center dark:text-white w-full mr-10">
        {t("capture_pokemon_putting_in_the_box")}
      </p>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
    </div>
  );
};
