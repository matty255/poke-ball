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
        <div className="App  max-w-4xl mx-auto font-sanss2 dark:bg-gray-700">
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
