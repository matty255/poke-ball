import { auth } from "../api/firebase";
import { useContext } from "react";
import { AuthContext } from "../hooks/UserContext";
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import GoogleIcon from "../static/googleIcon.png";
import FacebookIcon from "../static/facebookIcon.png";

export const SignIn = () => {
  const { user } = useContext(AuthContext);
  const [signInWithGoogle, users, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, userFace, loadingFace, errorFace] =
    useSignInWithFacebook(auth);

  if (loading || loadingFace) {
    return <p className="text-white">Loading...</p>;
  }
  if (user || userFace) {
    return <p>접속중</p>;
  } else
    return (
      <>
        <div className="flex flex-row justify-end items-center gap-2">
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
