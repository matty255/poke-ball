import { auth } from "../api/firebase";
import React, { useState, useContext } from "react";
import { AuthContext } from "../hooks/UserContext";
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";

export const SignIn = () => {
  const { user } = useContext(AuthContext);
  const [signInWithGoogle, users, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, userFace, loadingFace, errorFace] =
    useSignInWithFacebook(auth);
  console.log(errorFace);

  if (loading || loadingFace) {
    return <p>Loading...</p>;
  }
  if (user || userFace) {
    return <p>접속중</p>;
  } else
    return (
      <>
        <div className="flex flex-row justify-end items-center gap-2">
          <button onClick={() => signInWithGoogle()}>구글로그인</button>
          <button onClick={() => signInWithFacebook()}>페이스북로그인</button>
        </div>
      </>
    );
};
