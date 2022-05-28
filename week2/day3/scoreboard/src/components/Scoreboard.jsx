import { useState } from 'react';
import AddPlayerForm from './AddPlayerForm';
import Player from './Player';
import '../style/Scoreboard.scss';

// This function will order the object from the top to the bottom using the score value:
const compareScore = (playerA, playerB) => {
  return playerB.score - playerA.score;
};

// This function will order the object in the alphabetic order using the name value:
const compareName = (playerA, playerB) => {
  return playerA.name.localeCompare(playerB.name);
};

// The players receives the list of players from useState:
const Scoreboard = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Violeta', score: 11 },
    { id: 2, name: 'Eszter', score: 14 },
    { id: 3, name: 'Jeroen v2', score: 4 },
    { id: 4, name: 'Lisa', score: 42 }
  ]);

  // The sortBy initial value will be 'score':
  const [sortBy, setSortBy] = useState('score');

  // The function that is invoked when the user uses the html select: The function sets a new 'value' to the setSortBy useState, because one changed occured at the useState the component will be re-render:
  const changeSorting = event => {
    // console.log('new sort order:', event.target.value);
    setSortBy(event.target.value);
  };

  // The const playersSorted will receive the value of the array players sorted... (further, the html will receive this value)
  // This ternary operator chooses which funtion will be invoked and what kind of sort will happen:
  const playersSorted = [...players].sort(
    sortBy === 'name' ? compareName : compareScore
  );

  // const [increment, setIncrement] = useState(0);

  const incrementScore = id => {
    const newPlayersArray = players.map(player => {
      // decide whether this player's score needs to be incremented
      if (player.id === id) {
        // and if so, create a new player object,
        return {
          // but first copying over the player object's data
          ...player,
          // and then overriding the score property to be incremented
          score: player.score + 1
        };
      } else {
        // else, just keep them
        return player;
      }
    });
    setPlayers(newPlayersArray);
  };

  // When the user clicks on the Reset button, call this function...
  const resetScores = () => {
    const newPlayersArray = players.map(player => {
      return {
        // but first copying over the player object's data
        ...player,
        // and then overriding the score property to be 0
        score: 0
      };
    });
    setPlayers(newPlayersArray);
  };

  // When the user clicks on the Random button, call this function...
  const randomScores = () => {
    const newPlayersArray = players.map(player => {
      return {
        // but first copying over the player object's data
        ...player,
        // and then overriding the score property to be random
        score: Math.floor(Math.random() * 101)
      };
    });
    setPlayers(newPlayersArray);
  };

  // New useState...
  const [newName, setNewName] = useState('');
  // when the user clicks on the addNewPlayer, call this function....
  const addNewPlayer = newName => {
    // console.log('newName: ', newName);
    // if newName is not empty...
    if (newName !== ' ' && newName.length !== 0) {
      let newPlayersArray = [...players];
      // then add a new position to the new array:
      newPlayersArray.push({ id: players.length + 1, name: newName, score: 0 });
      setPlayers(newPlayersArray);
    }
    // set the new value to the Players array:
    return players;
  };

  // When the user clicks on the Delete button, call this function...
  const deletePlayer = id => {
    console.log('id: ', id);
    // First copy over the Players array...
    const newPlayersArray = [...players];
    // then find a position of the object with the id received from the button...
    const position = newPlayersArray.findIndex(player => {
      return player.id === id;
    });
    // console.log('position: ', position);
    // then remove the object at the position...
    newPlayersArray.splice(position, 1);
    // console.log(newPlayersArray);
    // then set the new value to the Players array:
    setPlayers(newPlayersArray);
  };

  return (
    <div className="Scoreboard">
      <p>
        {/* onChange call a function changeSorting and give a value as an argument.*/}
        Sort order:
        <select onChange={changeSorting} value={sortBy}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
        <button onClick={resetScores}>Reset</button>
        <button onClick={randomScores}>Random</button>
      </p>
      <p>Player's scores:</p>
      <ul>
        {/* The react will map over the playersSorted that receive an array sorted: */}
        {playersSorted.map(player => {
          const { id, name, score } = player;
          return (
            <Player
              key={id}
              id={id}
              name={name}
              score={score}
              incrementScore={incrementScore}
              deletePlayer={deletePlayer}
            />
          );
        })}
      </ul>

      <AddPlayerForm
        newName={newName}
        setNewName={setNewName}
        addNewPlayer={addNewPlayer}
      />
    </div>
  );
};

export default Scoreboard;
