import { useState, useEffect, useContext, useRef } from "react";
import { PokemonContext } from "../hooks/usePokemonContext";

import PokemonCard from "../view/PokemonCard";
import axios from "axios";
import { useGenerateNumber } from "../hooks/useGenerateNumber";
import Spinner from "../view/Spinner";
import tw from "tailwind-styled-components";
import Refresh from "../static/refresh.png";
import ToggleDark from "../elements/ToggleDark";
import ToggleLang from "../elements/ToggleLang";

const CardBox = tw.div`
flex flex-row flex-wrap items-center gap-3 gap-y-5 md:gap-y-6
justify-around mx-auto 
`;

const PokemonList = () => {
  const num = useGenerateNumber(1, 880);
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${num}`
  );
  const [next, setNext] = useState(true);
  const [lastElement, setLastElement] = useState(null);
  const [end, setEnd] = useState(false);

  const { pokemons, addPokemons } = useContext(PokemonContext);

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
    <div className="mx-auto text-right bg-moon-pattern bg-fixed bg-center bg-no-repeat">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row m-3 gap-3">
          <ToggleDark />
          <ToggleLang />
        </div>
        <button
          onClick={callList}
          className="w-12 p-2 mr-2 hover:animate-spin transition-transform delay-300 duration-500"
        >
          <img src={Refresh} alt="새로고침" />
        </button>
      </div>
      <CardBox>
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

        {loading && <Spinner />}
        {end && <p className="text-center my-10">여기가 페이지 끝입니다!</p>}
      </CardBox>
    </div>
  );
};

export default PokemonList;
