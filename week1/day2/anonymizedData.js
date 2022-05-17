const patients = require('./patients');
// console.log(patients);

// My solution:
// map executes a callback for each element in the array
const anonymizedData = patients.map(patient => {
  // return an object with id and age, it gets added to the output array
  return {
    id: patient.id,
    age: patient.age,
    gender: patient.gender,
    height: patient.height,
    weight: patient.weight,
    dailyExercise: patient.dailyExercise
  };
});

console.log(anonymizedData);

// DIY - Modify the program above to include as much data about the patients in the output, but without the personal details of the patients.

// The reader solution:
const anonimizedData2 = patients.map(function (patient) {
  const { id, age, gender, height, weight, dailyExercise } = patient;

  return {
    id: id,
    age: age,
    gender: gender,
    height: height,
    weight: weight,
    dailyExercise: dailyExercise
  };
});

console.log(anonimizedData2);
