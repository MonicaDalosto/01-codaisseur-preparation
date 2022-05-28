import '../style/Player.scss';

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
    <li className="Player">
      <div className="percentage_coloring" style={{ width: score + '%' }} />
      <p>
        {name} (score: {score})
      </p>
      <button onClick={() => incrementScore(id)}>increment</button>
      <button onClick={() => deletePlayer(id)}>Delete Player</button>
    </li>
  );
};

export default Player;
