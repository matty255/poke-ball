import { firebaseInstance, auth } from "../api/firebase";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../hooks/UserContext";
import { getAuth, signInWithRedirect } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";

export const SignIn = () => {
  const { user } = useContext(AuthContext);
  const [signInWithGoogle, users, loading, error] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user?.email}</p>
      </div>
    );
  } else
    return (
      <>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => signInWithGoogle()}>Sign In</button>
      </>
    );
};
