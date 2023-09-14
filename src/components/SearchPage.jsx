
import { useLocation } from 'react-router-dom';


import Card from './Card';

export const SearchPage = () => {
	const location = useLocation();

	

	

	return (
		<div className='container'>
			<p className='p-search'>
				Se encontraron <span>{filteredPokemons.length}</span>{' '}
				resultados:
			</p>
			<div className='card-list-pokemon container'>
				{filteredPokemons.map(pokemon => (
					<Card pokemon={pokemon} key={pokemon.id} />
				))}
			</div>
		</div>
	);
};
