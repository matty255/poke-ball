import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../hooks/UserContext";
import { logout } from "../api/signOut";
import { SignIn } from "../api/signIn";
import Logout from "../static/logout.png";

const SignInForm = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {!user ? (
        <>
          <SignIn />
        </>
      ) : (
        <Link
          to="/"
          className="p-2 md:p-4 text-sm md:text-base flex items-end md:absolute lg:fixed md:right-20 md:top-4 text-white"
          onClick={logout}
        >
          <img src={Logout} alt="Logout" />
        </Link>
      )}
    </>
  );
};

export default SignInForm;
