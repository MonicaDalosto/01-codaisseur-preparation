const patients = require('./patients');

// console.log(patients);

const calculateBMI = (height, weight) => {
  return Math.round(weight / (height * height));
};

const bmis = patients.map(patient => {
  let BMI = calculateBMI(patient.height, patient.weight);

  console.log(
    `WHAT IS PATIENT? ${patient.firstName} ${patient.lastName}, BMI: ${BMI}`
  );

  return BMI;
});

console.log(bmis);
