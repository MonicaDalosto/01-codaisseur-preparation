import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        // console.log(response.data.results);
        setPokemons(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemons();
  }, []); // empty => only runs when the page loads (once).

  // console.log('my pokemons: ', pokemons);

  return (
    <div>
      {/* {pokemons ? (
        pokemons.map(pokemon => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))
      ) : (
        <p>Loading ..</p>
      )} */}
      {pokemons.map(pokemon => {
        return (
          <div>
            <Link to={`/details/${pokemon.name}`}>{pokemon.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
