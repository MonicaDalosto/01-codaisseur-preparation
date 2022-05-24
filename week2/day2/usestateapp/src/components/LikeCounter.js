import { useState, useEffect } from 'react';

const LikeCounter = () => {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!
  const [like, setLike] = useState(false); // <- using state!

  // console.log('what are these?', numLikes, set_numLikes);

  const increment = () => {
    set_numLikes(numLikes + 1);
  };
  console.log('Yes, clicked! Current number of likes:', numLikes);

  const resetCounter = () => {
    set_numLikes(initial_numLikes);
  };

  const toggleLike = () => {
    setLike(!like);
  };
  console.log('like', like);

  console.log('A render!');

  useEffect(() => {
    console.log('The useEffect action!');
  }, [numLikes]);

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
      </p>
      <button onClick={increment}>Like</button>
      <br />
      <button onClick={resetCounter}>Reset</button>
      <br />
      <button onClick={toggleLike}>
        {!like ? 'Like this' : "You've liked this. Click to unlike"}
      </button>
    </div>
  );
};

export default LikeCounter;
