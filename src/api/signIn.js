import { auth } from "../api/firebase";
import React, { useState, useContext } from "react";
import { AuthContext } from "../hooks/UserContext";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

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
        <div className="flex flex-row justify-end gap-2">
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
          <button onClick={() => signInWithGoogle()}>구글로그인</button>
        </div>
      </>
    );
};
