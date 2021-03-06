import { useContext } from "react";
import { app } from "../api/firebase";
import { AuthContext } from "../hooks/UserContext";
import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

export const CapturedPokemons = () => {
  const { user } = useContext(AuthContext);
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

  return { value, loading, error, capturedPokemonList };
};
