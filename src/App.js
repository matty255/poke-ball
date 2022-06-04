import { useContext } from "react";
import { PokeProvider } from "./components/PokemonContext";
import PokemonList from "./components/PokemonList";
import PokemonBox from "./components/PokemonBox";
import PokemonForm from "./components/PokemonForm";

function App() {
  return (
    <PokeProvider>
      <div className="App">
        <PokemonList />
        <PokemonBox />
      </div>

      <PokemonForm />
    </PokeProvider>
  );
}

export default App;
