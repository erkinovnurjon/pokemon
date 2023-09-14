/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ pokemon, loading, infoPokemon }) => {
  return (
    <div className="grid grid-cols-4 gap-6 mt-24">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => (
          <Link to={`/pokemon/${item.id}`} key={item.id}>
            <div className="card  hover:bg-slate-500 flex justify-center items-center rounded-md bg-slate-400 border p-4 px-6">
              <h2>{item.id}</h2>
              <img className="p-2" src={item.sprites.front_default} alt="" />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Card;

