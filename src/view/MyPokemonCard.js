import { useState, useEffect, useContext, useRef } from "react";
import { PokemonContext } from "../hooks/usePokemonContext";
import { useNavigate } from "react-router-dom";
import { translateName } from "../hooks/useTranslateName";
import { AuthContext } from "../hooks/UserContext";
import { releasePokemon } from "../api/sandPokemon";

const MyPokemonCard = ({ uid, pokemonId, imgUrl, type, id }) => {
  return (
    <div className="p-4 m-2 border border-gray-400 rounded-md bg-white ">
      <p>{translateName(pokemonId)}</p>
      <img src={imgUrl} alt="" className="animate-bounce" />
      <button className="" onClick={() => releasePokemon(id)}>
        놓아주기
      </button>
    </div>
  );
};

export default MyPokemonCard;
