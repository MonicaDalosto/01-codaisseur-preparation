import { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';

export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      // Getting back data from the net, through the wire, air, and the ocean:
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?_limit=5'
      );

      console.log('Got back:', response.data);

      setArticles(response.data);
    }
    doSomeDataFetching();
  }, []);

  const clearNotifications = () => {
    setArticles([{}]);
  };

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <button onClick={clearNotifications}>Clear notifications</button>
      {articles.map(article => {
        return (
          <ArticleCard
            key={article.id}
            title={article.title}
            content={article.body}
          />
        );
      })}
    </div>
  );
}
