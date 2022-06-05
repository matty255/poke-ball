import { Routes, Route, Link } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonBox from "./components/PokemonBox";
import PokemonForm from "./components/PokemonForm";
import PokemonDetail from "./view/PokemonDetail";

function App() {
  return (
    <>
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
        </Routes>
      </div>
    </>
  );
}

export default App;
