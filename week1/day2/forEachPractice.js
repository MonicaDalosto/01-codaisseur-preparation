const patients = require('./patients');

// First option:
// declare function
const displayFullName = patient => {
  // HERE IS HOW TO CHECK YOURSELF
  // console.log('CHECK TO SEE WHAT IS PATIENT:', patient)
  const { firstName, lastName } = patient;

  const fullName = `${firstName} ${lastName}`;

  // console.log(fullName);
};

// pass as callback
patients.forEach(displayFullName);

// Second option:
// pass anonymous function directly
patients.forEach(patient => {
  // HERE IS HOW TO CHECK YOURSELF
  // console.log("CHECK TO SEE WHAT IS PATIENT:", patient);
  const { firstName, age } = patient;

  // console.log(`${firstName} - age: ${age}`);
});

// DIY's
// - for each patient log their weight
patients.forEach(patient => {
  const { weight } = patient;
  // console.log(`Weight: ${weight}`);
});

// - for each patient, log their last name and gender
patients.forEach(patient => {
  const { lastName, gender } = patient;
  // console.log(`LastName: ${lastName}, Gender: ${gender}`);
});
// - for each patient,
//      - if they are of gender 'm' console.log Mr. and their lastName
//      - if they are of gender 'f' console.log Mrs. and their lastName
patients.forEach(patient => {
  const { lastName, gender } = patient;
  if (gender === 'm') {
    console.log(`Mr. ${lastName}`);
  } else {
    console.log(`Mrs. ${lastName}`);
  }
});
