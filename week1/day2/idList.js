// DIY's - Write a program with which researchers can get an array of ids of their patients

const patients = require('./patients');

// console.log(patients);

// map executes the callback function for each element
const idList = patients.map(patient => {
  return patient.id;
});

console.log(idList);
