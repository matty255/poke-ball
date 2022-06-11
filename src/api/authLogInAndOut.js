import { auth } from "./firebase";
import { useContext } from "react";
import { AuthContext } from "../hooks/UserContext";
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import GoogleIcon from "../static/googleIcon.png";
import FacebookIcon from "../static/facebookIcon.png";
import { signOut } from "firebase/auth";

export const SignIn = () => {
  const { user } = useContext(AuthContext);
  const [signInWithGoogle, users, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, userFace, loadingFace, errorFace] =
    useSignInWithFacebook(auth);

  if (loading || loadingFace) {
    return <p className="text-white drop-shadow-lg">Loading...</p>;
  }
  if (user || userFace) {
    return (
      <p className="dark:text-white">나도 멋진 포켓몬을 잡으러 가볼까요?</p>
    );
  } else
    return (
      <>
        <div className="flex flex-row justify-end items-center gap-2 drop-shadow-lg">
          <button onClick={() => signInWithGoogle()}>
            <img src={GoogleIcon} alt="" />
          </button>
          <button onClick={() => signInWithFacebook()}>
            <img src={FacebookIcon} alt="" />
          </button>
        </div>
      </>
    );
};

export const logout = () => {
  signOut(auth);
};
