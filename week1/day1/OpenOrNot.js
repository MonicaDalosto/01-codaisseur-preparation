const currentDay = 'wednesday'
const currentTime = 20
const christmasToday = false

const dayOff = 'monday' 
const openingTime = 18
const closingTime = 23

// console.log(`Restaurant open? ${ currentDay !== dayOff && currentTime >= openingTime && currentTime <= closingTime && !christmasToday}`);
// console.log(`Restaurant closed? ${ currentDay === dayOff || currentTime <= openingTime || currentTime >= closingTime || christmasToday }`);

const openToday = currentDay !== dayOff && !christmasToday;
const openRightNow = currentTime >= openingTime && currentTime <= closingTime;

console.log(`Restaurant open? ${ openToday && openRightNow }`);
console.log(`Restaurant closed? ${ !openToday || !openRightNow }`);