// importing our array of patients using `require`
const patients = require('./patients');

// accesing elements in an array
const firstPatient = patients[0];

// console.log(firstPatient);

// which element to access can also be dependent on a variable
const whichElementOfArray = 9;
const tenthPatient = patients[whichElementOfArray];
// const tenthPatient = patients[9];

// console.log(tenthPatient);

// DIY - My practice: 17/05/2022

// - console.log the second patient from the array
const whichPatient = 1;
const secondPatient = patients[whichPatient];
console.log(secondPatient);

// - console.log the last patient from the array
const lastPatient = patients[patients.length - 1];
console.log(lastPatient);
