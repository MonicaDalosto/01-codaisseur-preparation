import axios from 'axios'; // it will be used to fetch data from the API
import { useEffect, useState } from 'react'; // control the states and re-render the page
import { Link, useNavigate, useParams } from 'react-router-dom'; // Link: create the links to navigate to the pages;

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const params = useParams(); //useParams() is a hook that  allows us to access the URL parameters;
  const navigate = useNavigate(); // é um hook que atualiza a URL; useNavigate() is a hook that get the value from the Url;

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=151'
        );
        setPokemons(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemons();

    // if does params.filter have value... (it will happened just when the user typed on the input)
    if (params.filter) {
      // o useParams() lê o campo da URL e se existir valor para o parâmetro filter, search recebe filter:
      setSearch(params.filter);
    }
  }, []); // empty => only runs when the page loads (once).

  // console.log('my pokemons: ', pokemons);

  // invoked when the the user types anything on the input;
  const handleChange = event => {
    setSearch(event.target.value); // search will receive the value typed on the input;

    // navigate allows us to maintain the history of the navigation, when the user navigates back (using the button back):
    navigate(`/${event.target.value}`); // a URL vai ser atualizada com o valor digitado pelo user; like this: http://localhost:3000/pika : pika came from the input;
  };

  return (
    <div>
      {/* when the user type anything on the input, onChange will invoke the function handleChange; */}
      <input type="text" value={search} onChange={handleChange} />

      {/* If pokemons do: */}
      {pokemons ? (
        pokemons
          // filter over pokemons, for each pokemon return a new array with those names start with the value inside the search (starts with vazio '');
          .filter(pokemonObject => pokemonObject.name.startsWith(search))
          // map over the new array from filter method, for each pokemon return a div with the pokemon.name...
          .map(pokemon => (
            <div>
              {/* , and convert each name in a Link/Route. Adding the pokemon.name at the end of the dynamic route, that was created on the App.js */}
              <Link to={`/details/${pokemon.name}`}>{pokemon.name}</Link>
            </div>
          ))
      ) : (
        // if !pokemons render the pharagraph below:
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HomePage;

// Explanation about useNavigate and useParams: between lines 25 and 39:
// the initial Url was stored on the const navigate: const navigate = useNavigate(); line 9;
// there is a dynamic route on the App.js that says anything after : will be a parameter filter: http://localhost:3000/:filter;
// when the user typed anything on the input:
//  the navigate will add what was typed at the end of the initial Url and stores the new value: navigate(`/${event.target.value}`); line 41;
// params.filter get the value added to the Url by the useNavigate()
