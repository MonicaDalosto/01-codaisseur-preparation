import './App.css';
import Pokemon from './components/Pokemon';
import Title from './components/Title';

const pokemons = [
  {
    name: 'Charizard',
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ['Blaze', 'Solar power', 'Tough claws', 'Drought']
  },
  {
    name: 'Bulbasaur',
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ['Overgrow', 'Chlorophyll']
  },
  {
    name: 'Mewtwo',
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ['Pressure', 'Unnerve', 'Steadfast', 'Insomnia']
  },
  {
    name: 'Mega beedrill',
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ['Intimidate', 'Unnerve']
  }
];

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Pokemons bag: " />
        {pokemons.map((pokemon, index) => {
          return (
            <Pokemon
              key={index}
              name={pokemon.name}
              weight={pokemon.weight}
              awesome={pokemon.awesome}
              terrifying={pokemon.terrifying}
              abilities={pokemon.abilities}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
