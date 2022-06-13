import { useContext } from "react";

import { AuthContext } from "../hooks/UserContext";
import { SignIn } from "../api/authLogInAndOut";

const UserSignInForm = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {!user ? (
        <>
          <SignIn />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default UserSignInForm;
