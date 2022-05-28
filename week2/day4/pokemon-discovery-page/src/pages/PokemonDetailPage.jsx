import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// APIURL: https://pokeapi.co/api/v2/pokemon/{name}
// Obj: Show the details (full pokemon)
// do a fetch to the API for the pokemon details
// define a useState to keep the data
// a useEffect to trigger the request
// render.

const PokemonDetailPage = () => {
  // params will receive the value from the UseParams(), that is the URL called;
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      // asynchronous function:
      // the pokeName will receive the value from the url params, and the params.pokeName is referring the jocker that I used when I created the url/link on the App.js route:
      const pokeName = params.pokename;
      try {
        // the response will receive the data that the axios is getting from the API:
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokeName}`
        );
        // console.log(response);
        setPokemon(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPokemon();
  }, []);

  return (
    <div>
      <h1>Pokemon Details</h1>
      {pokemon ? (
        <div>
          <h3>{pokemon.name}</h3>
          <img alt=" " src={pokemon.sprites.front_default} />
          <p>
            Types:{' '}
            {pokemon.types.map(typePokemon => (
              <span>{typePokemon.type.name}</span>
            ))}
          </p>
          <p>Weight: {pokemon.weight}</p>
          <p>Height: {pokemon.height}</p>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default PokemonDetailPage;
