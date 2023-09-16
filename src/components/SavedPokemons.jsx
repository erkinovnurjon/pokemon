/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons';

const SavedPokemons = () => {
  const [savedPokemonList, setSavedPokemonList] = useState([]);
  const [deleteModal , setDeleteModal] = useState(false)

  const openDeleteModal = () => {
      setDeleteModal(true)
  }
  const closeDeleteModal = () => {
      setDeleteModal(false)
  }

  useEffect(() => {
    const savedPokemons = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('pokemon_')) {
        const savedPokemon = JSON.parse(localStorage.getItem(key));
        savedPokemons.push(savedPokemon);
      }
    }
    setSavedPokemonList(savedPokemons);
  }, []);
  //delete Pokemon
  const removePokemon = (id) => {
  const confirmDelete = window.confirm('Ochirishni tasdiqlaysizmi?');
  if (confirmDelete) {
    localStorage.removeItem(`pokemon_${id}`);
    const updatedPokemonList = savedPokemonList.filter((pokemon) => pokemon.id !== id);
    setSavedPokemonList(updatedPokemonList);
  }
};


  return (
    <div className='py-24'>
      <div className='container mx-auto p-4 px-8'>
        <div className='flex justify-center'>
          <div className='text-center'>
            <h2 className='text-3xl'>List of Saved Pokemon</h2>
            <div>
              <div className=' grid grid-cols-3 gap-7 my-12'>
                {savedPokemonList.map((pokemon, index) => (
                  <div key={index} className='bg-slate-200 border shadow-lg my-3 rounded flex items-center justify-around w-72 h-24'>
                    <p>{pokemon.name}</p>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                      alt={pokemon.name}
                      className='w-16 h-16'
                    />
                    <FontAwesomeIcon className=' cursor-pointer' 
                    onClick={() => removePokemon(pokemon.id)} icon={faTrash} />
                  </div>
                ))}
              </div>
            </div>
            <div className='flex justify-end'>
              <NavLink to='/'>
                <button className='shadow-md h-10 ml-44 bg-slate-200 px-3 py-2 rounded hover:bg-slate-300 active:bg-slate-400'>
                  Home
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedPokemons;
