const patients = require('./patients');

const calculateBMR = (weight, height, ageOfUser, genderOfUser) => {
  const heightInCm = height * 100;

  let BMR;

  if (genderOfUser === 'm') {
    BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser + 50;
  } else {
    BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser - 150;
  }

  return BMR;
};

const bmrs = patients.map(patient => {
  let BMR = calculateBMR(
    patient.weight,
    patient.height,
    patient.age,
    patient.gender
  );
  console.log(
    `What is Patient? ${patient.firstName} ${patient.lastName}, BMR: ${BMR}`
  );

  return BMR;
});

console.log(bmrs);
