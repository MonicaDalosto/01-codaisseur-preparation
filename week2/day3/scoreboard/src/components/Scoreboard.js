import { useState } from 'react';
import AddPlayerForm from './AddPlayerForm';
import Player from './Player';

const compareScore = (playerA, playerB) => {
  return playerB.score - playerA.score;
};

const compareName = (playerA, playerB) => {
  console.log('playerA: ', playerA, 'playerB: ', playerB);
  console.log(playerA.name.localeCompare(playerB.name));
  return playerA.name.localeCompare(playerB.name);
};

const Scoreboard = () => {
  const [players, set_players] = useState([
    { id: 1, name: 'Violeta', score: 11 },
    { id: 2, name: 'Eszter', score: 14 },
    { id: 3, name: 'Jeroen v2', score: 4 },
    { id: 4, name: 'Lisa', score: 42 }
  ]);

  // first "copy" the array
  const playersSorted = players.sort(compareScore); // then sort it with the `compare_score` callback function
  const playersSorted2 = players.sort(compareName); // then sort it with the `compare_score` callback function
  // console.log(playersSorted2);

  return (
    <div className="Scoreboard">
      <p>Player's scores:</p>
      <ul>
        {/* {players.map(player => {
          <Player key={player.id} name={player.name} />;
        })} */}
        {playersSorted2.map(player => {
          return (
            <Player key={player.id} name={player.name} score={player.score} />
          );
        })}
      </ul>
      <AddPlayerForm />
    </div>
  );
};

export default Scoreboard;
