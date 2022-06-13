import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

export async function savePokemon({ pokemonId, imgUrl, uid, type }) {
  try {
    await addDoc(collection(getFirestore(), "pokemon"), {
      pokemonId: pokemonId,
      imgUrl: imgUrl,
      uid: uid,
      type: type,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error writing new message to Firebase Database", error);
  }
}

export async function releasePokemon(id) {
  try {
    await deleteDoc(doc(getFirestore(), "pokemon", id));
  } catch (error) {
    console.error("Error writing new message to Firebase Database", error);
  }
}
