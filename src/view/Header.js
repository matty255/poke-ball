import { Link } from "react-router-dom";
import SignInForm from "../components/UserSignInForm";
import PikaHeader from "../static/PikaHeader.webp";
import PokeBall from "../static/poke-ball.png";
import { useContext } from "react";
import { AuthContext } from "../hooks/UserContext";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="font-bold">
      <div className="bg-slate-600 p-2 bg-glass-pattern bg-center">
        <Link
          to="/"
          className="p-2 md:p-4 text-sm md:text-base text-white box-decoration-clone
          drop-shadow-lg"
        >
          HOME
        </Link>
        {!user ? (
          ""
        ) : (
          <Link
            to="/poke-box"
            className="p-2 md:p-4 text-sm md:text-base text-white box-decoration-clone
          drop-shadow-lg"
          >
            포켓몬박스
          </Link>
        )}

        <Link
          to="/poke-custom"
          className="p-2 md:p-4 text-sm md:text-base text-white box-decoration-clone
          drop-shadow-lg"
        >
          검색하기
        </Link>
        <img
          src={PikaHeader}
          alt=""
          className="w-24 inline-flex ease-in-out delay-150 
          sm:hover:translate-x-64 transition-transform  lg:hover:translate-x-96 duration-700 peer"
        />
        <img
          src={PokeBall}
          alt=""
          className="w-8 mt-5 delay-300 ease-in-out opacity-0 peer-hover:opacity-100 transition-opacity inline-flex animate-spin"
        />
        <SignInForm />
      </div>
    </div>
  );
};

export default Header;
