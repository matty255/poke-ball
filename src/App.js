import { Routes, Route } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonBox from "./components/PokemonBox";
import PokemonForm from "./components/PokemonForm";
import PokemonDetail from "./view/PokemonDetail";
import Header from "./view/Header";
import { AuthProvider } from "./hooks/UserContext";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="App p-4 m-4">
          <Header />
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/poke-box" element={<PokemonBox />} />
            <Route path="/poke-custom" element={<PokemonForm />} />
            <Route path="/detail/*" element={<PokemonDetail />} />
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
