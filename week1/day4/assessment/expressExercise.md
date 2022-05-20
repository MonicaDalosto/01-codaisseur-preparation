# 🧙 Week 1 - Express Exercise

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select `Open Preview`)

## RULES AND SUBMISSION

### Rules for this exercise

- You are allowed to consult the Reader, previous exercises and search on the internet
- You are NOT allowed to ask your colleagues for help
- You are NOT allowed to make this public in any ways

### Duration

- This exercise ends at 11.15h
- You should start submitting your code at least 5 minutes before deadline (~11:10)

### How to submit

1. Create a new directory
2. Download the `characters.json` file from Slack and drag into the folder
3. Download the `expressExercise.md` file from Slack and drag into the folder
4. Once you finish or the deadline time is reached:
   - Open [gist](https://gist.github.com/)
   - Login, if you are not logged in yet
   - Copy/paste all your code there
   - Click on `Create secret gist` button
   - Fill in [THIS FORM](https://forms.gle/DHv8DQYWRZGEr2Er6)

[_Here is a screen recording on how to do this_](https://s3.eu-west-1.amazonaws.com/cd.sseu.re/items/z8uLGBBQ/2f304d6d-8128-422c-845a-527c29f4353e.gif?v=a85c67f08eb0ab3795f2f113b6bb1a5a)

## Learning goals & some tips

For transparency and clarity, these are the learning goals we will be testing:

- Using npm packages (express)
- Setting up a simple Express server
- Defining routes in your express server

## Tips

1. **Read the assignment carefully!** It is easy to accidentally deviate from an assignment, resulting in a frustrating experience. Taking the time to read the exercise can save you time and effort.
1. **Don't get stuck!** If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you. You are also allowed to ask for help if you're really stuck, just try to avoid it.
1. **Break problems up into smaller problems!** Before writing code make yourself a 'to-do list' or 'battleplan'. Use `console.log()` to help you with debugging!
1. **Use nodemon!** If you run your server using `npx nodemon server.js` instead of `node server.js`, nodemon will keep track of changes on your server, and restart it every time you save the file.

## ❗❗❗Assessments❗❗❗

**Setup**:

1. Create a new folder
1. In the directory, initialize a new NPM project
1. Install express (You can also install nodemon if you like)
1. Create a new file called `server.js`
1. Require express, declare a value for PORT and start your server using `app.listen`.
1. Require (import) your characters JSON file.

### REQUIRED FEATURES

1. **(A)** Create a GET - `/` route that responds with the string `Hello from Express server`
1. **(B)** Create a GET - `/message` route that responds with an html message of your choice. (don't forget to define the html message constant)
1. **(C)** Create a GET - `/characters` route that responds with the whole list of characters.
1. **(D)** Create a GET - `/characters/:id` route that responds with the character with matching id
1. **(E)** Create a GET - `/characters/bloodtype/:blood` route that responds with the characters matching the blood type in the `path`

### BONUS FEATURES

1. **(F)** Add validation for feature **E** - present the correct characters even if blood parameter is written in different cases ("human" vs "Human" vs "HUman")
1. **(G)** Add error handling for features **D** and **E**, - users should get a message stating what went wrong

Remember to test these routes from your browser!
