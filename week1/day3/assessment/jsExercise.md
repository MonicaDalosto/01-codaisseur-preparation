# 🧙 Week 1 - Javascript Assessment

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select `Open Preview`)

## RULES AND SUBMISSION

### Rules for this exercise

- You are allowed to consult the Reader, previous exercises and search on the internet
- You are NOT allowed to ask your colleagues for help
- You are NOT allowed to share this file with anyone besides the teachers

### Duration

- This exercise ends at 11.15h
- You should start submitting your code at least 5 minutes before deadline (~11:10)

### How to submit

1. Create a new directory
2. Download the `characters.json` file from Slack and drag into the folder
3. Download the `jsExercise.md` file from Slack and drag into the folder
4. Once you finish or the deadline time is reached:
   - Open [gist](https://gist.github.com/)
   - Login, if you are not logged in yet
   - Copy/paste all your code there
   - Click on `Create secret gist` button
   - Fill in [THIS FORM](https://docs.google.com/forms/d/e/1FAIpQLSd7R_F_MCEC2_8BuK7bi7bZhXX68qrYID9RPPMWf6eTIT2HcQ/viewform)

[_Here is a screen recording on how to do this_](https://s3.eu-west-1.amazonaws.com/cd.sseu.re/items/z8uLGBBQ/2f304d6d-8128-422c-845a-527c29f4353e.gif?v=a85c67f08eb0ab3795f2f113b6bb1a5a)

## Learning goals

For transparency and clarity, these are the learning goals we will be testing:

- Writing Javascript (using variables, functions, return values, parameters)
- Working with arrays and objects
- Using array methods (.find, .filter, .map)

## Tips

- **Read the assignment carefully!** It is easy to accidentally deviate from an assignment, resulting in a frustrating experience. Taking the time to read the exercise can save you time and effort.
- **Don't get stuck!** If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you. You are also allowed to ask for help if you're really stuck, just try to avoid it.
- **Break problems up into smaller problems!** Before writing code make yourself a 'to-do list' or 'battleplan'. Use `console.log()` to help you with debugging!

## ❗❗❗Javascript Assessments❗❗❗

Create a file called `index.js` and import the `characters.json` file using `require`. Don't forget to include the `characters.json` extension when importing (`.json`).

### REQUIRED FEATURES

- (**A**) Select the **4th** character of your characters array and console.log it.
- (**B**) use an array method to locate the character object with id `78` and console.log it.
- (**C**) Console.log an array with only the characters that have `blood: "Half-blood"`.

### BONUS FEATURES

- (**D**) Console.log an array that contains only the `quotes` of each character (so strings, not object)
- (**E**) Console.log an array with all characters that are not "Human".
- (**F**) Console.log an array of all characters whose name **_includes_** "agr" [**Tip here**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

The `const` in this section should look something like this:

```js
const characters = require("./characters.json"); // ONLY IMPORT THIS ONCE

// Exercise-Z (fake)
const charNames = characters.map((char) => char.name); //for example
console.log(charNames); // array with only character names.
```
