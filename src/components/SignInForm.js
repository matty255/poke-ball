import { useState, useEffect, useContext } from "react";
import { firebaseInstance, auth } from "../api/firebase";
import { Routes, Route, Link } from "react-router-dom";
import { AuthContext } from "../hooks/UserContext";
import { logout } from "../api/signOut";
import { SignIn } from "../api/signIn";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";

const SignInForm = () => {
  const { user } = useContext(AuthContext);
  const [signInWithGoogle, users, loading, error] = useSignInWithGoogle(auth);
  console.log(user);
  return (
    <>
      {!user ? (
        <>
          <SignIn />
        </>
      ) : (
        <Link to="/sign-in" className="p-4" onClick={logout}>
          로그아웃
        </Link>
      )}
    </>
  );
};

export default SignInForm;
