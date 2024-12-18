import inquirer from 'inquirer';
import fs from 'fs';

// Function to generate the README content
function generateREADME(answers) {
    return `

## Title
${answers.title}

## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

## Description
${answers.description}

## Installation
To install the necessary dependencies, run the following command:

${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contribution
${answers.contribution}

## Tests
To run tests, use the following command:
${answers.tests}

## Questions
If you have any questions, feel free to contact me:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
    `;
}


async function promptUser() {
    console.log('Welcome to the README generator!\n');

    const response = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please provide a description of your project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please provide installation instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please provide usage information:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please provide contribution guidelines:',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Please provide test instructions:',
            name: 'tests',
        },
        {
            type: 'list',
            message: 'Please select a license for your project:',
            name: 'license',
            choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None'],
        },
        {
            type: 'input',
            message: 'Please provide your GitHub username:',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Please provide your email address:',
            name: 'email',
        },
    ]);

    response.questions = `If you have any questions, please feel free to contact me at [${response.email}](mailto:${response.email}). Or at [${response.github}](https://github.com/${response.github}).`;

    return response;
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

async function init() {
    const data = await promptUser();

    const readme = generateREADME(data);

    writeToFile('README.md', readme);
}
init();