const patients = require('./patients');
const email = process.argv[2];

const specificPatient = patients.find(patient => {
  return email === patient.email;
});

if (specificPatient !== undefined) {
  console.log('OUTPUT:', specificPatient);
} else {
  console.log(`Patient with email: ${email}, not found`);
}

console.log(specificPatient);
