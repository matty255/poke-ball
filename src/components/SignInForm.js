import { useState, useEffect, useContext } from "react";
import { authService, provider } from "../api/firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  getRedirectResult,
} from "firebase/auth";
import { onGoggleClick } from "../api/signIn";

const SignInForm = () => {
  let token = "";
  const auth = getAuth();
  console.log(auth);
  token = document.cookie;
  console.log(token);
  const [tokens, setTokens] = useState(false);

  const isLogin = () => {
    const auth = getAuth();
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        document.cookie = credential.accessToken;
        setTokens(true);

        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  useEffect(() => {
    if (auth) {
      setTokens(true);
      isLogin();
    } else return setTokens(false);
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setTokens(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div>
        {auth ? (
          <button onClick={() => logOut()}>로그아웃</button>
        ) : (
          <button onClick={onGoggleClick}>구글로그인</button>
        )}
      </div>
    </>
  );
};

export default SignInForm;
