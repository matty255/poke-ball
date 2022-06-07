import React, { useContext, useState } from "react";
import { translateName } from "../hooks/useTranslateName";
import { AuthContext } from "../hooks/UserContext";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const PokemonShare = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let num = location.pathname.split("/");
  let documentIndex = location.pathname.split("/");
  const [pokemon, setPokemon] = useState({});
  const { user } = useContext(AuthContext);

  const callPokemon = () => {
    return;
  };

  const showPokemonDetail = () => {
    if (!num || !documentIndex) return alert("주소를 찾을 수 없어요!");
    try {
      setTimeout(async () => {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${num}/`
        );
        console.log(response.data);
        const id = response.data.id;
        const img = response.data.sprites.front_default;
        const desc = response.data.sprites;
        setPokemon({ id, img });
      }, 100);
    } catch (error) {
      alert("실패");
    }
  };

  return (
    <>
      <div className="mt-4 w-full h-screen">
        <div className="flex justify-center items-center flex-col gap-10">
          <h1 className="text-4xl dark:text-white">
            ㅇㅇ님이 ㅇ월 ㅇ일에 잡은 ㅇㅇㅇ 입니다.
          </h1>

          {pokemon && pokemon.id && (
            <div className="mx-auto flex flex-col justify-center items-center">
              <img
                src={pokemon?.img}
                alt=""
                className="animate-bounce object-contain max-w-fit"
              />
              <p>{translateName(pokemon?.id)}</p>
              <button onClick={() => navigate("/")}></button>
            </div>
          )}
        </div>
        <p>공유하기</p>
        <p>가입하고 나도 포켓몬 잡기</p>
      </div>
    </>
  );
};

export default PokemonShare;
