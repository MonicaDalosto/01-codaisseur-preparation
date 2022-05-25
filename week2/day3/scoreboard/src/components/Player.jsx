/*
  props = {
    id: {player.id}
    name: {player.name}
    score: {player.score}
    incrementScore: {incrementScore}
  }


*/

const Player = ({ name, score, id, incrementScore, deletePlayer }) => {
  return (
    <li className="player" style={{ display: 'flex' }}>
      <p>
        {name} (score: {score})
      </p>
      <button onClick={() => incrementScore(id)}>increment</button>
      <button onClick={() => deletePlayer(id)}>Delete Player</button>
    </li>
  );
};

export default Player;
