// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
${answers.projectTitle}

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#testing)
- [Contact me](#email)

## Description
🔍 ${answers.description}

## Installation
💾 ${answers.installation}

## Usage
💻 ${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 

## Built with
✋${answers.installation}

## Contributing
👪 ${answers.contributing}

## Tests
✏️ ${answers.testing}

## Contact me
<br />

Find me on GitHub:[GitHub](https://github.com/${answers.username})<br />
✉️ Email me with any questions: ${answers.email}<br /><br />`;

}

module.exports = generateMarkdown;