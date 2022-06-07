import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../hooks/UserContext";
import { SignIn, logout } from "../api/authLogInAndOut";
import Logout from "../static/logout.png";

const UserSignInForm = () => {
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
          className="p-2 md:p-4 text-sm md:text-base flex items-end md:absolute lg:fixed md:right-20 md:top-4 text-white drop-shadow-lg"
          onClick={logout}
        >
          <img src={Logout} alt="Logout" className="drop-shadow-md" />
        </Link>
      )}
    </>
  );
};

export default UserSignInForm;
