import { Link } from "react-router-dom";
import SignInForm from "../components/SignInForm";

const Header = () => {
  return (
    <div className="">
      <div className="bg-gray-400 p-4 ">
        <Link to="/" className="p-4">
          홈
        </Link>
        <Link to="/poke-box" className="p-4">
          포켓몬박스
        </Link>
        <Link to="/poke-custom" className="p-4">
          검색하기
        </Link>
        <SignInForm />
      </div>
    </div>
  );
};

export default Header;
