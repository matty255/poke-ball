import { firebaseInstance, auth } from "../api/firebase";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useEffect, useState, useContext } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";

export const logout = () => {
  signOut(auth);
};
