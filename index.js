const fs = require('fs');

const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
     //   validate: validateInput,
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
   //     validate: validateInput,
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
     //   validate: validateInput,
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.',
      //  validate: validateInput,
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.',
     //   validate: validateInput,
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please select a license used for this project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
       // validate: validateInput,
    },
    {
        type: 'input',
        name: 'userName',
        message: 'Please enter your GitHub username.',
      //  validate: validateInput,
    },

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile('README.md', data);
    });
}

