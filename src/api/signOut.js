import { auth } from "../api/firebase";
import { signOut } from "firebase/auth";

export const logout = () => {
  signOut(auth);
};
