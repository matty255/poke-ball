import { Routes, Route, Link } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonBox from "./components/PokemonBox";
import PokemonForm from "./components/PokemonForm";
import PokemonDetail from "./view/PokemonDetail";
import SignInForm from "./components/SignInForm";
import { logout } from "./api/signOut";
import { useContext, useEffect } from "react";
import { AuthProvider, AuthContext } from "./hooks/UserContext";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { firebaseInstance, auth } from "./api/firebase";
function App() {
  const [signInWithGoogle, users, loading, error] = useSignInWithGoogle(auth);

  return (
    <>
      <AuthProvider>
        <div className="App p-4 m-4">
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
          </div>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/poke-box" element={<PokemonBox />} />
            <Route path="/poke-custom" element={<PokemonForm />} />
            <Route path="/detail/*" element={<PokemonDetail />} />
            <Route path="/sign-in" element={<SignInForm />} />
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
