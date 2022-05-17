function validateNumberOfInputs(argv) {
  if (argv.length !== 7) {
    console.log(`
      You gave ${argv.length - 2} arguments(s) to the program

      Please provide 5 arguments for

      weight (kg),
      height (m),
      age (years),
      whether you exercise daily (yes or no)
      and your gender (m or f)

      Example: 

      $ node index.js 82 1.79 32 yes m
    `);
  process.exit();
  }
}

function validateWeightHeightAndAge(weight, height, ageOfUser, argv) {
  if (isNaN(weight) || isNaN(height) || isNaN(ageOfUser)) {
    console.log(`
      Please make sure weight, height and age are numbers:
  
      weight (kg) example: 82  | your input: ${argv[2]}
      height (m) example: 1.79 | your input: ${argv[3]}
      age (years) example 32   | your input: ${argv[4]}
  
      $ node userStorie08.js 82 1.79 32 yes m
    `);
  
    process.exit();
  }

  if (weight < 30 || weight > 300) {
    console.log(`
    Please enter a weight in kgs
    
    Your weight of ${weight} kgs does not fall in the range between 30 kg and 300 kg
    
    If you weight is below 30 kg or over 300 kg seek professional medical help
    `);
    process.exit();
  }

  if (ageOfUser < 20) {
    console.log(`
      This BMI calculator was designed to be used by people older than 20
    
      BMI is calculated differently for young people.

      Please visit: https://en.wikipedia.org/wiki/Body_mass_index#Children_(aged_2_to_20)

      For more information
    `);
    process.exit();
  }
}

function validateDailyExercise(userDailyExercise){
  if (userDailyExercise !== 'yes' && userDailyExercise !== 'no') {
    console.log(`
      Please specify if you exercise daily with "yes" or "no"

      You entered ${userDailyExercise}
    `);
    process.exit();
  }
}

function validateGender(userGender){
  if (userGender !== 'm' && userGender !== 'f') {
    console.log(`
      Please specify wether you are a male 'm' or female 'f'

      You entered ${userGender}
    `);
    process.exit();
  }
}

function calculateBMI(weight, height) {
  return weight / (height * height);
}

function calculateIdealWeight(height) {
  return 22.5 * height * height;
}

function calculateBMR(weight, height, ageOfUser, genderOfUser) {
  const heightInCm = height * 100;
  let BMR; 
  if (genderOfUser === 'm') {
    BMR = (10 * weight) + (6.25 * heightInCm) - (5 * ageOfUser) + 50;
  } else {
    BMR = (10 * weight) + (6.25 * heightInCm) - (5 * ageOfUser) - 150;
  }
  return BMR;
}

function calculateDailyCalories(dailyExercise, BMR){
  let caloriesBurnedPerDay;
  if (dailyExercise === 'yes') {
    caloriesBurnedPerDay = Math.round(BMR * 1.6);
  } else {
    caloriesBurnedPerDay = Math.round(BMR * 1.4);
  }
  return caloriesBurnedPerDay;
}

function calculateDietWeeks(weightToLoseOrToGain) {
  return Math.abs(weightToLoseOrToGain / 0.5);
}

function calculateDietCalories(weightToLoseOrToGain, dailyCalories){
  return weightToLoseOrToGain < 0 ? dailyCalories + 500 : dailyCalories - 500;
}

function validateDailyExercise(userDailyExercise){
  if (userDailyExercise !== 'yes' && userDailyExercise !== 'no') {
    console.log(`
      Please specify if you exercise daily with "yes" or "no"

      You entered: ${userDailyExercise}
    `);
    process.exit();
  }
}

function formatOutput(userObject) {
  // console.log(userObject);
  return `
    **************
    BMI CALCULATOR
    **************

    age: ${userObject.age} years
    gender: ${userObject.gender}
    height: ${userObject.heightInM} m
    weight: ${userObject.weightInKg} kg
    do you exercise daily? ${userObject.dailyExercise}

    ****************
    FACING THE FACTS
    ****************

    Your BMI is ${userObject.BMI}

    A BMI under 18.5 is considered underweight
    A BMI above 25 is considered overweight

    Your ideal weight is ${userObject.idealWeight} kg
    With a normal lifestyle you burn ${userObject.dailyCalories} calories a day

    **********
    DIET PLAN
    **********

    If you want to reach your ideal weight of ${userObject.idealWeight} kg:

    Eat ${userObject.dietCalories} calories a day
    For ${userObject.dietWeeks} weeks
  
  `;
}

function bmiCalculator() {
  validateNumberOfInputs(process.argv);

  const weightInKg = parseInt(process.argv[2]);
  const heightInM = parseFloat(process.argv[3]);
  const age = parseInt(process.argv[4]);
  const dailyExercise = process.argv[5];
  const gender = process.argv[6];

  const BMI = calculateBMI(weightInKg, heightInM);
  const idealWeight = calculateIdealWeight(heightInM);
  const BMR = calculateBMR(weightInKg, heightInM, age, gender);
  const dailyCalories = calculateDailyCalories(dailyExercise, BMR);
  const weightToLoseOrToGain = weightInKg - idealWeight;
  const dietWeeks = calculateDietWeeks(weightToLoseOrToGain);
  const dietCalories = calculateDietCalories(weightToLoseOrToGain, dailyCalories);

  validateWeightHeightAndAge(weightInKg, heightInM, age, process.argv);
  validateDailyExercise(dailyExercise);
  validateGender(gender);

  const user = {
    weightInKg: weightInKg,
    heightInM: heightInM,
    age: age,
    dailyExercise: dailyExercise,
    gender: gender,
    BMI: BMI,
    idealWeight: idealWeight,
    BMR: BMR,
    dailyCalories: dailyCalories,
    weightToLoseOrToGain: weightToLoseOrToGain,
    dietWeeks: dietWeeks,
    dietCalories: dietCalories,
  };

  const output = formatOutput(user);

  console.log(output);   
}

bmiCalculator();