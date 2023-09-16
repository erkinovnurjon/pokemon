import { useEffect, useState } from 'react';

const SavedPokemons = () => {
  const [savedPokemonList, setSavedPokemonList] = useState([]);

  
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

  return (
   <div className=' py-16'>
       <div className=' container mx-auto p-4 px-8'>
      <h2>Saqlangan Pokémonlar</h2>
      <ul>
        {savedPokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
   </div>
  );
};

export default SavedPokemons;
