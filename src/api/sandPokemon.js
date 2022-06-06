import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "../api/firebase";

// Saves a new message to Cloud Firestore.
export async function savePokemon({ pokemonId, imgUrl, uid }) {
  // Add a new message entry to the Firebase database.
  try {
    await addDoc(collection(getFirestore(), "pokemon"), {
      pokemonId: pokemonId,
      imgUrl: imgUrl,
      uid: uid,
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
