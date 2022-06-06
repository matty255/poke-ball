import { useState, useEffect, useContext, useRef } from "react";
import { PokemonContext } from "../hooks/usePokemonContext";

import PokemonCard from "../view/PokemonCard";
import axios from "axios";
import { useGenerateNumber } from "../hooks/useGenerateNumber";

const PokemonList = () => {
  const num = useGenerateNumber(1, 898);
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${num}`
  );
  const [next, setNext] = useState(true);
  const [lastElement, setLastElement] = useState(null);
  const [end, setEnd] = useState(false);

  const { pokemons, addPokemons } = useContext(PokemonContext);
  console.log(pokemons);
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

  const callList = () => {
    setLoading(true);
    try {
      setTimeout(async () => {
        const response = await axios.get(pageNum);
        const data = response.data.results;
        const page = response.data.next;
        addPokemons(data);
        setLoading(false);
        setPageNum(page);
      }, 100);
    } catch (error) {
      setEnd(true);
      setLoading(false);
      alert("끝!");
    }
  };

  return (
    <div className="mx-auto text-right">
      <h2>포켓몬리스트</h2>
      <button onClick={callList} className="bg-blue-400 p-2">
        새로고침
      </button>
      <div className="flex flex-row flex-wrap justify-center items-center">
        {pokemons.length > 0 &&
          pokemons.map((pokemon, i) => {
            const pokemonIndex =
              pokemon.url.split("/")[pokemon.url.split("/").length - 2];
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
            return i === pokemons.length - 1 && !loading && !end ? (
              <div key={`${i}-${pokemon.name}`} ref={setLastElement}>
                <PokemonCard pokemon={pokemon} image={image} type="capture" />
              </div>
            ) : (
              <div key={`${i}-${pokemon.name}`}>
                <PokemonCard pokemon={pokemon} image={image} type="capture" />
              </div>
            );
          })}

        {loading && (
          <p className="text-center fixed inset-1/2 text-4xl text-pink-500 bg-blue-500 p-6">
            loading...
          </p>
        )}
        {end && <p className="text-center my-10">여기가 페이지 끝입니다!</p>}
      </div>
    </div>
  );
};

export default PokemonList;
