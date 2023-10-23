const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, installation, usage, license, contribution, test, username, email }) =>
`<a name="title"></a> 
## Title
${title}

<a name="description"></a>
## Description
${description}


## Table of Contents
- [Title](#title)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

<a name="installation"></a>
## Installation
${installation}

<a name="usage"></a>
## Usage
${usage}

<a name="license"></a>
## License
${license}

<a name="contributing"></a>
## Contributing
${contribution}

<a name="tests"></a>
## Tests
${test}

<a name="questions"></a>
## Questions
For any additional questions, please contact me through:
GitHub: [https://github.com/${username}](https://github.com/${username})
Email: ${email}`
;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of the application?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions of the application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage of the application?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidelines of the application?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the test instructions of the application?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license did you use for your application?',
      choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
  ])
  .then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

//   WHEN I choose a license for my application from a list of options
//   THEN a badge for that license is added near the top of the README and a notice is added 
//   to the section of the README entitled License that explains which license 
//   the application is covered under
