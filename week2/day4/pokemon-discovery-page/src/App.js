import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
// import NavBar from './components/NavBar';
import PokemonDetailPage from './pages/PokemonDetailPage';

const NavBar = () => {
  return (
    <div>
      <Link style={{ marginRight: 30 }} to="/">
        Homepage
      </Link>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Welcome to the Pokemon's page:</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:pokename" element={<PokemonDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
