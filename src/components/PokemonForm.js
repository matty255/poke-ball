import React, { useContext, useState } from "react";
import { PokemonContext } from "../hooks/usePokemonContext";
import { translateName } from "../hooks/useTranslateName";
import { useGenerateNumber } from "../hooks/useGenerateNumber";
import { AuthContext } from "../hooks/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PokemonForm = () => {
  let navigate = useNavigate();
  const [pokemonName, setPokemonName] = useState();
  const [pokemon, setPokemon] = useState({});
  const num_Shiny = useGenerateNumber(1, 10);
  const num = useGenerateNumber(1, 898);
  const { captureFB } = useContext(PokemonContext);
  const { user } = useContext(AuthContext);
  const handleNameOnChange = (e) => {
    setPokemonName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const callPokemon = () => {
    if (!user) return alert("로그인해주세요!");
    if (!pokemonName) return alert("내용을 입력해주세요!");
    try {
      setTimeout(async () => {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${num}/`
        );
        console.log(response.data);
        const id = response.data.id;
        if (num_Shiny > 6) {
          const img = response.data.sprites.front_shiny;
          alert("이로치 등장!");
          setPokemon({ id, img });
        } else {
          const img = response.data.sprites.front_default;
          setPokemon({ id, img });
        }
      }, 100);
    } catch (error) {
      alert("실패");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mt-4">
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="여기" onChange={handleNameOnChange} />
          <button onClick={callPokemon}>랜덤 글자 입력하고 클릭!</button>
        </form>
      </div>

      {pokemon && pokemon.id && (
        <div className="mx-auto flex flex-col justify-center items-center">
          <img
            src={pokemon?.img}
            alt=""
            className="animate-bounce object-contain max-w-fit"
          />
          <p>{translateName(pokemon?.id)}</p>
          <button onClick={() => navigate("/poke-box")}>
            <button
              onClick={captureFB({
                pokemonId: pokemon?.id,
                imgUrl: pokemon?.img,
                uid: user?.uid,
              })}
            >
              추가+
            </button>
          </button>
        </div>
      )}
    </>
  );
};

export default PokemonForm;
