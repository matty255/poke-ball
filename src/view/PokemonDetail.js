import { useState, useEffect, useContext } from "react";
import { PokemonContext } from "../hooks/PokemonContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useGenerateNumber } from "../hooks/useGenerateNumber";
import axios from "axios";
import { translateName } from "../hooks/useTranslateName";
import { AuthContext } from "../hooks/UserContext";

const PokemonDetail = () => {
  const { user } = useContext(AuthContext);
  const { captureFB } = useContext(PokemonContext);
  let location = useLocation();
  let navigate = useNavigate();
  const num_Shiny = useGenerateNumber(1, 10);
  const [detail, setDetail] = useState({});
  const data = location.state;
  const url = data.pokemon.url;
  const id = data.pokemonId;

  const callDetail = async () => {
    try {
      const response = await axios.get(url);
      // console.log(response.data);
      if (num_Shiny > 6) {
        const img = response.data.sprites?.front_shiny;
        setDetail({ id, img, num_Shiny });
      } else {
        const img = response.data.sprites.front_default;
        setDetail({ id, img });
      }
    } catch (error) {
      console.log("포켓몬 정보가 없어요!");
    }
  };

  useEffect(() => {
    callDetail();
  }, []);

  return (
    <>
      <div className="p-4 m-2 border border-gray-400 rounded-md bg-white flex items-center flex-col">
        <div>
          {detail.num_Shiny > 6 && <p>이로치 등장!!!</p>}
          <p>{translateName(id)}</p>
          <img src={detail.img} alt="" className="animate-bounce" />
          <button onClick={() => navigate("/poke-box")}>
            <button
              onClick={captureFB({
                pokemonId: detail.id,
                imgUrl: detail.img,
                uid: user?.uid,
              })}
            >
              공던지기+
            </button>
          </button>
          <button onClick={() => navigate(-1)}>돌아가기</button>
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
