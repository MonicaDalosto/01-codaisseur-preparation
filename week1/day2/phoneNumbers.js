// DIY's - Write a program with which researchers can get an array of phoneNumbers

const patients = require('./patients');

// console.log(patients);

// map executes the callback function for each element
const phoneNumbers = patients.map(patient => {
  // console.log('WHAT IS PATIENT', patient);
  // return only the phone numbers to the output array
  return patient.phoneNumber;
});

console.log(phoneNumbers);
