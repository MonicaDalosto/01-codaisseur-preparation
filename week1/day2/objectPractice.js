const patients = require('./patients');
const firstPatient = patients[0];
console.log(firstPatient);

// DIY's
// 1. assign the weight, age and height of the firstPatient to variables weight, age and height
const { weight, age, height } = firstPatient;
console.log(`weight: ${weight}, age: ${age}, height: ${height}`);
// 2. declare a variable fullName and assign the firstName, and lastName of the firstPatient to it
let fullName;
const { firstName, lastName } = firstPatient;
fullName = `${firstName} ${lastName}`;
console.log('Full Name: ', fullName);

// 3. if the firstPatient does not exercise, console.log: "does not exercise" else console.log: "this patient exercises"
const { dailyExercise } = firstPatient;
console.log(
  `${dailyExercise === 'no' ? 'does not exercise' : 'this patient exercises'}`
);

// or
if (firstPatient.dailyExercise === 'no') {
  console.log('does not exercise');
} else {
  console.log('this patient exercises');
}
