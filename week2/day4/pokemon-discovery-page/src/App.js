import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonDetailPage from './pages/PokemonDetailPage';

const NavBar = () => {
  return (
    <div>
      <Link style={{ margin: 30 }} to="/">
        Homepage
      </Link>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Pokemon Discovery</h1>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/:filter" element={<HomePage />} />
        </Route>
        <Route path="/details/:pokename" element={<PokemonDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
