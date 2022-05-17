function bmiCalculator() {
  validateNumberOfInputs(process.argv);

  const weightInKg = parseInt(process.argv[2]);
  const heightInM = parseFloat(process.argv[3]);
  const age = parseInt(process.argv[4]);
  const dailyExercise = process.argv[5];
  const gender = process.argv[6];

  validateWeightHeightAndAge(weightInKg, heightInM, age, process.argv);
  validateDailyExercise(dailyExercise);
  validateGender(gender);

  const BMI = calculateBMI(weightInKg, heightInM);
  const idealWeight = calculateIdealWeight(heightInM);
  const BMR = calculateBMR(weightInKg, heightInM, gender);
  const dailyCalories = calculateDailyCalories(BMR, dailyExercise);
  const weightToLoseKg = weightInKg - idealWeightKg;
  const dietWeeks = calculateDietWeeks(weightToLoseKg);
  const dietCalories = calculateDietCalories(weightToLoseKg);

  const output = formatOutput(
    age,
    gender,
    heightInM,
    weightInKg,
    dailyExercise,
    BMI,
    idealWeight,
    dailyCalories,
    dietCalories,
    dietWeeks
  );

  console.log(output);
}

bmiCalculator();