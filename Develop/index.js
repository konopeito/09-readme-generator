// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        // Title
        type: 'input',
        name: 'title',
        message: 'Please input project name',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                // requires title name
                console.log('Title name required');
                return false;
            }
            }
        },
    {
        // project description
        type: 'input',
        name: 'description',
        message:
        'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('you must provide a description')
           return false;
            }
            }
        },
        {
            // Features
            type: 'input',
            name: 'features',
            message:
            'list project features & highlights',
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Come on, tell us what important features your project has!')
               return false;
                }
                }
            },

    {
        // Table of Contents
        type: 'input',
        name: 'table of contents (optional)',
        message:
        'If your README is long, add a table of contents to make it easy for users to find what they need.',
        validate: tableInput => {
            if (tableInput) {
                return true;
            } else {
                console.log('This category is optional, to continue hit space.')
           return false
            }
            }
        },
        {
            // Installation
            type: 'input',
            name: 'installation',
            message:
            'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('fatal: you must provide steps!')
               return false;
                }
                }
            },
            {
                // Mockup/Preview
                type: 'input',
                name: 'preview',
                message:
                'Provide an image file URL for preview',
                validate: previewInput => {
                    if (previewInput) {
                        return true;
                    } else {
                        console.log('Hit space followed by enter to skip this field')
                   return false;
                    }
                    }
                },
            {
                // Usage
                type: 'input',
                name: 'usage',
                message:
                'Provide instructions and examples for use. Include screenshots as needed, enter file name for image.',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log('fatal: you must provide something!')
                   return false;
                    }
                    }
                },
                {
                    // Credits
                    type: 'input',
                    name: 'credits',
                    message:
                    'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
                    validate: creditsInput => {
                        if (creditsInput) {
                            return true;
                        } else {
                            console.log('')
                       return true;
                        }
                        }
                    },
                    {
                        // License
                        type: 'input',
                        name: 'license',
                        message:
                        'Choose a license, MIT, Apache 2.0, GPL v3.0 or enter NONE',
                        choices: ['MIT', 'Apache 2.0', 'GPL v3.0', 'NONE'],
                        validate: licenseInput => {
                            if (licenseInput) {
                                return true;
                            } else {
                                console.log('Select an option')
                           return false;
                            }
                            }
                        },
                        {
                            // Contact Github
                            type: 'input',
                            name: 'github',
                            message:
                            'Insert Github Username here for users to contact you',
                            validate: githubInput => {
                                if (githubInput) {
                                    return true;
                                } else {
                                    console.log('Please provide information in this field')
                               return false;
                                }
                                }
                            },
                            {
                                // Contact Email
                                type: 'input',
                                name: 'email',
                                message:
                                'Insert Email here for users to contact you',
                                validate: emailInput => {
                                    if (emailInput) {
                                        return true;
                                    } else {
                                        console.log('Please provide information in this field')
                                   return false;
                                    }
                                    }
                                },
                        
];

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
        });
}

// Function call to initialize app
init();

// exports
module.exports = questions;