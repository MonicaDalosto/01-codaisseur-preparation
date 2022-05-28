import { Routes, Route } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hello React Router</h1>
      <Routes>
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
