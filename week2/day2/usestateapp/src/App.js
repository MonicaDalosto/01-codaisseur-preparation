import LikeCounter from './components/LikeCounter';
import './App.css';
import AwesomeAnimals from './components/AwesomeAnimals';
import ArticleList from './components/ArticleList';

function App() {
  return (
    <main>
      <h1>Some Simple Title</h1>
      <LikeCounter />
      <br />
      <AwesomeAnimals />
      <ArticleList />
    </main>
  );
}

export default App;
