// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateKeySync } = require('crypto');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input


const questions = [
  "What is your Projects Title?",
  'Give a Description to Your Project?',
  'What are the steps required to install your project?',
  'How do you use your project',
  'License?',
  'How can a user contribute to the project?',
  "Write tests for your application",
  'Enter your GitHub username',
  'Enter Your Email'
];

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: questions[0],
      },
      {
        type: 'input',
        name: 'description',
        message: questions[1],
      },
      {
        type: 'input',
        name: 'install',
        message: questions[2],
      },
      {
        type: 'input',
        name: 'usage',
        message: questions[3],
      },
      {
        type: 'checkbox',
        name: 'license',
        message: questions[4],
        choices: [
          'MIT',
          'WTPFL',
          'Unilicense'
        ]
      },
      {
        type: 'input',
        name: 'contribution',
        message: questions[5],
      },
      {
        type: 'input',
        name: 'test',
        message: questions[6],
      },
      {
        type: 'input',
        name: 'github',
        message: questions[7],
      },
      {
        type: 'input',
        name: 'email',
        message: questions[8],
      },
    ])
    .then((data) => {
      const ReadMeContent = generateMarkdown(data);

      fs.writeFile('ReadmeEx.md', ReadMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created ReadmeEx.md!')
      );
    });
  
  // TODO: Create a function to write README file



  // TODO: Create a function to initialize app
  // function init() {
  //   getData()
  //   writeToFile("readmeex.md", generateMarkdown)
  // }

  // Function call to initialize app


  // init();
