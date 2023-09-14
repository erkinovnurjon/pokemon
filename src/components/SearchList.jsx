import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SearchList = () => {
  const { id } = useParams();
  const [state, setState] = useState({
    isFetched: false,
    data: [],
    error: false,
  });

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.data)
      .then((data) =>
        setState({
          isFetched: true,
          data: [data],
          error: false,
        })
      )
      .catch((err) => {
        setState({
          isFetched: true,
          data: [],
          error: err,
        });
      });
  }, [id]);

  return (
    <div className="grid container mx-auto p-4 grid-cols-1 ">
      {state?.data?.map((item) => (
        <div className="flex justify-center mt-6" key={item.id}>
          <div className="text-center p-8">
            <h1 className="my-5 text-center text-3xl">{item.name}</h1>
            <div className="flex justify-between gap-96">
              <div className="flex justify-center">
                <img
                  className="w-[450px] my-4 text-center"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
                  alt=""
                />
              </div>
              <div>
                <div className="abilities">
                  {item.abilities.map((poke, index) => (
                    <div className="group" key={index}>
                      <h2>{poke.ability.name}</h2>
                    </div>
                  ))}
                </div>
                <div className="text-center text-lg">
                  {item.stats.map((poke, index) => (
                    <div key={index}>
                      <h3>
                        {poke.stat.name}: {poke.base_stat}
                      </h3>
                    </div>
                  ))}
                </div>
                <div className="relative">
                  <Link to={"/"}>
                    <button className="absolute px-3 py-2 rounded shadow-2xl mt-40 bg-slate-300 hover:bg-slate-500">
                      Back
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
