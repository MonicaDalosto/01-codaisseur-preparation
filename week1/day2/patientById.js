const patients = require('./patients');
const id = parseInt(process.argv[2]);

// First option:
/*
const specificPatient = patients.find(patient => {
  // console.log('WHAT IS PATIENT?', patient);
  if (id === patient.id) {
    return true;
  } else {
    return false;
  }
});

console.log('OUTPUT:', specificPatient);
*/

// Second option:
const specificPatient2 = patients.find(patient => {
  return id === patient.id;
});

if (specificPatient2 !== undefined) {
  console.log('OUTPUT:', specificPatient2);
} else {
  console.log(`Patient with id: ${id}, not found`);
}

console.log('OUTPUT:', specificPatient2);
