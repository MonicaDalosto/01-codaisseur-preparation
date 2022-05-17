const patients = require('./patients');
const phoneNumber = process.argv[2];

const specificPatient = patients.find(patient => {
  return phoneNumber === patient.phoneNumber;
});

if (specificPatient !== undefined) {
  console.log('OUTPUT:', specificPatient);
} else {
  console.log(`Patient with phone number: ${phoneNumber}, not found`);
}
