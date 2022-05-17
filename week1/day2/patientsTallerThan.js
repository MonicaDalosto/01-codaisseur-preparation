const patients = require('./patients');
const height = parseFloat(process.argv[2]);

const patientsTallerThan = patients.filter(patient => {
  return patient.height > height;
});

console.log('OUTPUT:', patientsTallerThan);
console.log('TOTAL NUMBER OF PATIENTS', patients.length);
console.log(
  `NUMBER OF PATIENTS TALLER THAN ${height}:`,
  patientsTallerThan.length
);
