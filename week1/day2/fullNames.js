const patients = require('./patients');

// console.log(patients);

// map executes the callback function for each element
const fullNames = patients.map(patient => {
  // console.log('WHAT IS PATIENT', patient);
  const { firstName, lastName } = patient;

  return (fullName = `${firstName} ${lastName}`);
});

console.log(fullNames);
