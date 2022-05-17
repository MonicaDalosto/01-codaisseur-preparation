const startingShift = false
const cutVegetables = true
const cleanedFish = false
const cutChicken = true

const shouldWashHands =
  startingShift || cleanedFish || cutChicken /* your boolean expression here */
const noNeedToWashHands =
  !startingShift &&
  !cleanedFish &&
  !cutChicken /* your boolean expression here */

console.log(`Should I wash my hands? ${shouldWashHands}`)
console.log(`Can I do without washing? ${noNeedToWashHands}`)
