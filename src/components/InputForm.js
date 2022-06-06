import { useContext, useRef, useState, useCallback } from "react";
import { auth } from "../api/firebase";
import { Link } from "react-router-dom";
import { AuthContext } from "../hooks/UserContext";
import { logout } from "../api/signOut";
import { SignIn } from "../api/signIn";
import { saveMessage } from "../api/sandMessage";

const SignInForm = () => {
  const { user } = useContext(AuthContext);
  const text = useRef(null);
  console.log(text);

  return (
    <>
      <div>
        <input type="text" ref={text} />
        <button type="submit" onClick={() => saveMessage(text.current.value)}>
          메시지보내기
        </button>
      </div>
    </>
  );
};

export default SignInForm;
