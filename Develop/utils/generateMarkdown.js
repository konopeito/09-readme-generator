const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');
// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = 'Apache 2.0';
  if(license === '') {
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'MIT') {
      badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
    } else if (license === 'GPL v3.0') {
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = ""
  }
  return badge;
}

//  function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
    if(license === 'Apache 2,0') {
      licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
    } else if (license === 'MIT') {
      licenseLink = 'https://choosealicense.com/licenses/mit/'
    } else if (license === 'GPL v3.0') {
      licenseLink = 'https://www.gnu.org/licenses'
    } else {
      licenseLink = ""
    }
    return licenseLink;
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license} `
  }
  return licenseSection;
}

// Create a function to generate markdown for README
function generateMarkdown(answer) {

  return`
  # ${answer.title}
  # ${answer.description}
  # ${answer.features}
  ## Table of Contents
  ## Installation:
  ### You must install the following for this app to function:
  ### ${answer.installation}
  ## Usage:
  ### ${answer.usage}
  ## Credits:
  ### ${answer.credits}
  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}
  ## Contact:
  ### If you have any questions, you may contact me at either
  ### Github: https://github.com/${answer.contact}
  ### or
  ### Email: ${answer.contact}
`;
}

// exports
module.exports = generateMarkdown;
