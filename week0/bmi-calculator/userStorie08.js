// 5. As a user, I want the program to give me feedback when I input the wrong information, so I can learn how to use the program.

// We need exactly 5 inputs, so if we don't have that something is wrong
if (process.argv.length !== 7) {
  console.log(`
    You gave ${process.argv.length - 2} arguments(s) to the program

    Please provide 5 arguments for

    weight (kg),
    height (m),
    age (years),
    whether you exercise daily (yes or no)
    and your gender (m or f)

    Example: 

    $ node userStorie08.js 82 1.79 32 yes m
  `);
  process.exit();
}

console.log("What does process.argv contain?", process.argv);

let weightInKg = parseInt(process.argv[2]);
let heightInM = parseFloat(process.argv[3]);
let age = parseInt(process.argv[4]);
let dailyExercise = process.argv[5];
let gender = process.argv[6];

if (isNaN(weightInKg) || isNaN(heightInM) || isNaN(age)) {
  console.log(`
    Please make sure weight, height and age are numbers:

    weight (kg) example: 82  | your input: ${process.argv[2]}
    height (m) example: 1.79 | your input: ${process.argv[3]}
    age (years) example 32   | your input: ${process.argv[4]}

    $ node userStorie08.js 82 1.79 32 yes m
  `);

  process.exit();
}
if (weightInKg < 30 || weightInKg > 300) {
  console.log(`
  Please provide a number for weight in kilograms between 30 and 300
  weight (kg) example: 82  | your input: ${process.argv[2]}
  `);
  process.exit();
}

if (age < 20) {
  console.log(`
    This BMI calculator is designed for people over 20
  `);
  process.exit();
}

if (dailyExercise !== 'yes' && dailyExercise !== 'no') {
  console.log(`
    Please specify if you exercise daily with "yes" or "no"
  `);
  process.exit();
}

// The formula for BMI is: weight (kg) / (height (m) x height (m)):
let BMI = weightInKg / (heightInM * heightInM);
let roundedBMI = Math.round(BMI);

// To find the ideal weight, you can use the formula: weight (kg) = BMI x (height (m) x height (m)):
let idealWeight = Math.round(22.5 * heightInM * heightInM);

// The formula for Basal Metabolic Rate is: 10 x weight (kg) + 6.25 x height (cm) - 5 x age
let heightInCm = heightInM * 100;
let BMR

if (gender === 'm') {
  BMR = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) + 50;
} else {
  BMR = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) - 150;
}

// Declaring a variable, the value will depend on wether someone exercises!
let amountOfCaloriesBurnedPerDay
if (dailyExercise === 'yes') {
  amountOfCaloriesBurnedPerDay = Math.round(BMR * 1.6);
} else {
  amountOfCaloriesBurnedPerDay = Math.round(BMR * 1.4);
}

// The amount of weight to lose to reach your idealweight is: weight (kg) - ideal weight (kg)
let amountOfWeightToLoseOrToGain = weightInKg - idealWeight;

// The time (weeks) it will take to reach your ideal weight is: amount of weight to lose or to gain / 0.5
let weeksToReachTheIdealWeight = Math.round(Math.abs(amountOfWeightToLoseOrToGain / 0.5));

// The amount of calories you need to consume while dieting is: 
// if you want to lose weight: your daily usage - 500, and 
// if you want to gain weight: your daily usage + 500
let amountOfCaloriesToEat;
if (amountOfWeightToLoseOrToGain < 0) {
  amountOfCaloriesToEat = amountOfCaloriesBurnedPerDay + 500;
} else {
  amountOfCaloriesToEat = amountOfCaloriesBurnedPerDay - 500;
}

console.log(amountOfCaloriesToEat);

console.log(`
**************
BMI CALCULATOR
**************

age: ${age} Years
gender: ${gender}
height: ${heightInM} M
weight: ${weightInKg} Kg
do you exercise daily? ${dailyExercise}

****************
FACING THE FACTS
****************

Your BMI is ${roundedBMI}

A BMI under 18.5 is considered underweight and above 25 is considered overweight

Your ideal weight is ${idealWeight} Kgs
With a normal lifestyle you burn ${amountOfCaloriesBurnedPerDay} calories a day

**********
DIET PLAN
**********

If you want to reach your ideal weight of ${idealWeight} Kgs:

Eat ${amountOfCaloriesToEat} calories a day
For ${weeksToReachTheIdealWeight} weeks
`);