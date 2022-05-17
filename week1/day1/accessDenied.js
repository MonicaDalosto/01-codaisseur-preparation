const password = 'supersecretpassword'
const input = 'iamhackingyou'
const isAccountLocked = true

const passwordCorrect = password === input

const accountLocked = !passwordCorrect || isAccountLocked

// just locking someone out of their account isn't very nice ...
// We want to display some feedback:

// If the password is correct AND the account is not locked -> 'Welcome'
// If the account was locked or the password is wrong -> 'Your login attempt failed, contact system administrator'

// My answer:
// const welcome = 'Welcome';
// const attemptFailed = 'Your login attempt failed, contact system administrator';

// console.log(`${passwordCorrect && !isAccountLocked ? welcome : attemptFailed}`);

// Right answer:
const message = (passwordCorrect && !isAccountLocked ? 'Welcome' : 'Your login attempt failed, contact system administrator');

console.log(message);