import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'; 

const RightContent = () => {
  const { id } = useParams(); 

  const [data, setData] = useState(null);

  useEffect(() => {
  if (id) {
   
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setData(null);
      });
  }
}, [id]);


  return (
    <div className="flex justify-center  h-full py-20 ">
      {data ? (
        <div className="flex justify-center">
          <div className="text-center  p-8">
            <h1 className="my-5 text-center text-3xl">{data.name}</h1>
         <div className=' flex justify-between gap-96'>
                <div className="flex justify-center">
              <img
                className="w-[450px] my-4 text-center"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                alt=""
              />
            </div>
            <div>

            <div className="abilities">
              {data.abilities.map((poke, index) => (
                <div className="group" key={index}>
                  <h2>{poke.ability.name}</h2>
                </div>
              ))}
            </div>
            <div className="text-center text-lg">
              {data.stats.map((poke, index) => (
                <div key={index}>
                  <h3>
                    {poke.stat.name}: {poke.base_stat}
                  </h3>
                </div>
              ))}
            </div>
            <div className='relative'>
                <Link to={'/'}>
                   <button className='absolute px-3 py-2  mt-44 rounded shadow-2xl bg-slate-300 before:hover:bg-slate-400 hover:bg-slate-500'>back</button>
                  </Link>
            </div>
         </div>
            </div>
          </div>
        </div>
      ) : (
        <p className='loading'></p>
      )}
    </div>
  );
};

export default RightContent;
