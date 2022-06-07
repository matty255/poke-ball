import { Link } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import PikaHeader from "../static/PikaHeader.webp";
import PokeBall from "../static/poke-ball.png";
const Header = () => {
  return (
    <div className="">
      <div className="bg-slate-600 p-2 bg-glass-pattern bg-center">
        <Link
          to="/"
          className="p-2 md:p-4 text-sm md:text-base text-white box-decoration-clone"
        >
          HOME
        </Link>
        <Link
          to="/poke-box"
          className="p-2 md:p-4 text-sm md:text-base text-white box-decoration-clone"
        >
          포켓몬박스
        </Link>
        <Link
          to="/poke-custom"
          className="p-2 md:p-4 text-sm md:text-base text-white box-decoration-clone"
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
