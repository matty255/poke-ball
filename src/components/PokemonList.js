import { useState, useEffect, useContext, useRef } from "react";
import { PokemonContext } from "./PokemonContext";
import PokemonCard from "../view/PokemonCard";
import axios from "axios";

const PokemonList = () => {
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"
  );
  const [next, setNext] = useState(true);
  const [lastElement, setLastElement] = useState(null);
  const [end, setEnd] = useState(false);

  const { pokemons, capture, addPokemons } = useContext(PokemonContext);

  useEffect(() => {
    if (!end) {
      callList();
    }
  }, [next]);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setNext((n) => !n);
      }
    })
  );

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  const callList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(pageNum);
      const data = response.data.results;
      const page = response.data.next;
      addPokemons(data);
      setLoading(false);
      setPageNum(page);
    } catch (error) {
      setEnd(true);
      setLoading(false);
      alert("끝!");
    }
  };

  return (
    <div>
      <h2>포켓몬리스트</h2>
      <div className="flex flex-row flex-wrap">
        {pokemons.length > 0 &&
          pokemons.map((pokemon, i) => {
            const pokemonIndex =
              pokemon.url.split("/")[pokemon.url.split("/").length - 2];
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
            return i === pokemons.length - 1 && !loading && !end ? (
              <div key={`${i}-${pokemon.name}`} ref={setLastElement}>
                <PokemonCard pokemon={pokemon} image={image} />
              </div>
            ) : (
              <div key={`${i}-${pokemon.name}`}>
                <PokemonCard pokemon={pokemon} image={image} />
              </div>
            );
          })}

        {loading && <p className="text-center">loading...</p>}
        {end && <p className="text-center my-10">여기가 페이지 끝입니다!</p>}
      </div>
    </div>
  );
};

export default PokemonList;
