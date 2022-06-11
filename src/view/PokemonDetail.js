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
        setDetail({ id, img, num_Shiny, type: 1 });
      } else {
        const img = response.data.sprites.front_default;
        setDetail({ id, img, type: 0 });
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
      <div className="p-4 m-2 border border-gray-400 rounded-md flex items-center flex-col h-screen">
        <div>
          {detail.num_Shiny > 6 && <p>이로치 등장!!!</p>}
          <p>{translateName(id, 3)}</p>
          <img src={detail.img} alt="" className="animate-bounce" />
          <button onClick={() => navigate("/poke-box")}>
            <div
              onClick={captureFB({
                pokemonId: detail.id,
                imgUrl: detail.img,
                uid: user?.uid,
                type: detail.type,
              })}
            >
              공던지기+
            </div>
          </button>
          <button onClick={() => navigate(-1)}>돌아가기</button>
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
