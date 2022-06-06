import { useState, useEffect, useContext } from "react";
import { PokemonContext } from "../hooks/usePokemonContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { translateName } from "../hooks/useTranslateName";

const PokemonDetail = () => {
  const { capture, release } = useContext(PokemonContext);
  let location = useLocation();
  let navigate = useNavigate();
  const [detail, setDetail] = useState([]);
  const data = location.state;
  const url = data.pokemon.url;
  const id = data.pokemonId;
  console.log(id);
  console.log(url);
  const callDetail = async () => {
    try {
      const response = await axios.get(url);
      const result = response.data;
      setDetail(result);
      console.log(detail);
    } catch (error) {
      console.log("포켓몬 정보가 없어요!");
    }
  };

  useEffect(() => {
    callDetail();
  }, []);

  return (
    <div className="p-4 m-2 border border-gray-400 rounded-md bg-white flex items-center flex-col">
      <div>
        <p>{translateName(id)}</p>
        <img src={data.image} alt="" className="animate-bounce" />
        <div className="flex flex-row flex-wrap">
          <img
            src={detail.sprites?.back_default}
            alt=""
            className="animate-bounce"
          />
          <img
            src={detail.sprites?.back_female}
            alt=""
            className="animate-bounce"
          />
          <img
            src={detail.sprites?.back_shiny}
            alt=""
            className="animate-bounce"
          />
          <img
            src={detail.sprites?.back_shiny_female}
            alt=""
            className="animate-bounce"
          />
          <img
            src={detail.sprites?.front_default}
            alt=""
            className="animate-bounce"
          />
          <img
            src={detail.sprites?.front_female}
            alt=""
            className="animate-bounce"
          />
          <img
            src={detail.sprites?.front_shiny}
            alt=""
            className="animate-bounce"
          />
          <img
            src={detail.sprites?.front_shiny_female}
            alt=""
            className="animate-bounce"
          />
        </div>

        {data.type === "capture" ? (
          <button onClick={capture(data.pokemon)}>
            <Link to={"/poke-box"}>추가+</Link>
          </button>
        ) : (
          <button onClick={release(data.pokemon)}>풀어주기+</button>
        )}
        <button onClick={() => navigate(-1)}>돌아가기</button>
      </div>
    </div>
  );
};

export default PokemonDetail;
