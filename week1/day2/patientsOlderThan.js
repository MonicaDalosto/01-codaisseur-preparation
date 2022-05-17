const patients = require('./patients');
// hardcoding age 65 for now, we can make this dynamic later
const age = parseInt(process.argv[2]);

const patientsOlderThan = patients.filter(patient => {
  // console.log('WHAT IS PATIENT?', patient);
  return patient.age > age;
});

console.log('TOTAL NUMBER OF PATIENTS', patients.length);
console.log(`NUMBER OF PATIENTS OLDER THAN ${age}:`, patientsOlderThan.length);
console.log('OUTPUT:', patientsOlderThan);
