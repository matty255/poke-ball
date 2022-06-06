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
  const num_ = useGenerateNumber(1, pokemonName);
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
    try {
      setTimeout(async () => {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${num}/`
        );
        const id = response.data.id;
        const img = response.data.sprites.front_default;
        setPokemon({ id, img });
      }, 100);
    } catch (error) {
      alert("실패");
    }
  };

  return (
    <>
      <p>포켓몬 랜덤 소환</p>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="pokemon name"
          onChange={handleNameOnChange}
        />
        <button onClick={callPokemon}>랜덤 글자 입력하고 클릭!</button>
      </form>
      {pokemon && pokemon.id && (
        <div>
          <img src={pokemon?.img} alt="" />
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
