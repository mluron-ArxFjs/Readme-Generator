// TODO: Include packages needed for this application
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function userInput() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Describe the installation process if any: ",
        },

        {
            type: "input",
            name: "usage",
            message: "What does this project do?",
        },

        {
            type: "list",
            name: "license",
            message: "Choose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "installation",
            message: 'How do I install the necessary modules to run this project?',
        },
        {
            type: "input",
            name: "contributing",
            message: 'How do I contribute to this project?',
        },
        {
            type: "input",
            name: "testing",
            message: "How do I test this application?",

        },
        {
             type: "input",
             name: "username",
            message: "What is your Github username?",
           
        },
        {
            type: "input",
            name: "email",
            message: "What is your e-mail?",
            
        },
        {
             type: "input",
             name: "fileName",
            message: "What do you want to call this readme?",
           
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data,
        (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await userInput();
    writeToFile((answers.fileName), (generateMarkdown(answers)));
}

// Function call to initialize app
init();