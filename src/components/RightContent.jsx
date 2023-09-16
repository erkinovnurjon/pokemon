import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';


const RightContent = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

 const localSave = () => {

  const savedPokemon = localStorage.getItem(`pokemon_${id}`);
  if (savedPokemon) {
    alert('Bu Pokémon oldin saqlangan!');
  } else {
    localStorage.setItem(`pokemon_${id}`, JSON.stringify(data));
    alert('Pokémon muvaffaqiyatli saqlandi!');
  }
};



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

  
  const openModalHandler = () => {
    setOpenModal(true);
  };

  
  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <div className="flex justify-center h-full py-12">
      {data ? (
        <div className="flex justify-center">
          <div className="text-center p-8">
            <h1 className="my-5 text-center text-5xl">{data.name}</h1>
            <div className='card' style={{ display: openModal ? 'none' : 'block' }}>
              <div  className='flex card justify-between gap-48'>
                <div data-aos="fade-right" className="flex justify-center">
                  <img
                    className="w-[450px] my-4 text-center"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    alt=""
                  />
                </div>
                <div data-aos="fade-left">
                  <div className="abilities">
                    {data.abilities.map((poke, index) => (
                      <div className="flex justify-center" key={index}>
                        <h2 className='text-2xl'>{poke.ability.name}</h2>
                      </div>
                    ))}
                  </div>
                  <div className="text-center text-lg">
                    {data.stats.map((poke, index) => (
                      <div key={index}>
                        <h3>
                          {poke.stat.name}: {poke.base_stat}
                        </h3>
                        <div className="pokemons w-[350px] h-4 bg-green-400 relative">
                          <div
                            style={{ width: `${Math.min(poke.base_stat, 100)}%` }}
                            className="bg-green-600 h-full"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='relative'>
                    <Link to={'/'}>
                      <button                    
                        className='absolute px-3 py-2 mt-28 rounded shadow-2xl bg-slate-300 before:hover:bg-slate-400 hover:bg-slate-500'
                      >
                        back
                      </button>
                    </Link>
                  </div>
                  <button 
                    onClick={openModalHandler}
                    className='absolute px-3 py-2 mt-28 ml-16 rounded shadow-2xl bg-slate-300 before:hover:bg-slate-400 hover:bg-slate-500'>
                    open
                  </button>
                </div>         
              </div>     
                        
            </div>
            <div>
    {/* MODAL  */}

               {
                openModal && (
                  <div className="modal fade show w-full h-full " tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content flex justify-between gap-8">
                        <div className="modal-header">
                          {/* <h5 className="modal-title text-4xl" id="exampleModalLabel">Modal Title</h5> */}
            
                        </div>
                        <div className="modal-body">
                          {
                            data ?(
                              <>
                                <div className=' flex justify-between gap-9'>
                                  <div className='flex justify-center'>
                                    <img
                                      className="w-[250px] my-4 text-center"
                                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    <div className="abilities">
                                      {data.abilities.map((poke, index) => (
                                        <div className="flex justify-center" key={index}>
                                          <h2 className='text-2xl'>{poke.ability.name}</h2>
                                        </div>
                                        
                                      ))}
                          
                                    </div>
                                    <div className="text-center text-lg">
                                      {data.stats.map((poke, index) => (
                                        <div key={index}>
                                          <h3>
                                            {poke.stat.name}: {poke.base_stat}
                                          </h3>
                                          <div className="pokemons w-[250px] rounded h-3 bg-green-400 relative">
                                            <div
                                              style={{ width: `${Math.min(poke.base_stat, 100)}%` }}
                                              className="bg-green-600  h-full"
                                            ></div>
                                          </div>
                                          {/* <div>
                                            <BaseStat > {poke.base_stat}</BaseStat>
                                          </div> */}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </>
                            ) : null
                          }
                        </div>
                        <div className="modal-footer  flex gap-7">
                          <button type="button" className="btn btn-secondary  h-10  bg-slate-200 px-3 py-2 rounded hover:bg-slate-300 active:bg-slate-400" data-bs-dismiss="modal" onClick={closeModalHandler}>Close</button>
                          <button type="button" className=" h-10  bg-slate-200 px-3 py-2 rounded hover:bg-slate-300 active:bg-slate-400" onClick={localSave}>Save </button>
                          <Link to={'/saved'}>
                          <button className=' h-10  bg-slate-200 px-3 py-2 rounded hover:bg-slate-300 active:bg-slate-400'>
                            Saved Ones
                          </button>
                          
                           </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
               }  
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
