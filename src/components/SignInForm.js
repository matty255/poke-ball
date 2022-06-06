import { useContext } from "react";
import { auth } from "../api/firebase";
import { Link } from "react-router-dom";
import { AuthContext } from "../hooks/UserContext";
import { logout } from "../api/signOut";
import { SignIn } from "../api/signIn";

const SignInForm = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      {!user ? (
        <>
          <SignIn />
        </>
      ) : (
        <Link to="/" className="p-4" onClick={logout}>
          로그아웃
        </Link>
      )}
    </>
  );
};

export default SignInForm;
