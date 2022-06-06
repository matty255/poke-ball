import { getFirestore, collection } from "firebase/firestore";
import { auth, app } from "../api/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { AuthContext } from "../hooks/UserContext";
import { useContext } from "react";
import MyPokemonCard from "../view/MyPokemonCard";

export const CapturedPokemons = () => {
  const { user } = useContext(AuthContext);

  let userId = user?.uid;
  const [value, loading, error] = useCollection(
    collection(getFirestore(app), "pokemon"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}

      {value && (
        <div className="flex flex-row flex-wrap items-center justify-start gap-4">
          {value.docs.map((doc) => (
            <div key={doc.id}>
              {userId && userId === doc.data().uid ? (
                <>
                  <MyPokemonCard
                    uid={doc.data().uid}
                    pokemonId={doc.data().pokemonId}
                    imgUrl={doc.data().imgUrl}
                    type="release"
                    id={doc.id}
                  />
                </>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      )}
      <p>포켓몬을 잡아 박스에 넣어보세요!</p>
    </div>
  );
};
