import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

// Saves a new message to Cloud Firestore.
export async function savePokemon({ pokemonId, imgUrl, uid, type }) {
  // Add a new message entry to the Firebase database.
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
  // Add a new message entry to the Firebase database.
  try {
    await deleteDoc(doc(getFirestore(), "pokemon", id));
  } catch (error) {
    console.error("Error writing new message to Firebase Database", error);
  }
}
