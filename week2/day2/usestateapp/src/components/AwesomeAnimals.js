import { useState } from 'react';

// const animalsList = {
//   ["Chicken"],
//   ["Sloth"],
//   ["Porcupine"]
//   ["Killer whale"],
//   ["Velociraptor"]
// }

const AwesomeAnimals = () => {
  const animals = [
    'Chicken',
    'Sloth',
    'Porcupine',
    'Killer whale',
    'Velociraptor'
  ];

  return (
    <ul>
      {animals.map((animal, index) => {
        return (
          <li key={index}>
            Awesomeness level {index + 1}: {animal}
          </li>
        );
      })}
    </ul>
  );
};

export default AwesomeAnimals;
