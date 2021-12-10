// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// const fs = require("fs/promises");
// const generatePage = require('./src/page-template.js');


// const [name, github, school,employeeId] = profileDataArgs;

//   console.log(generatePage('muktar', 'mukey6', 'UofM', '1234'))
//   fs.writeFile('./index.html', generatePage(name, github, school,employeeId), err => {
//     if (err) throw new Error(err);
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });



const fs = require("fs/promises");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require('./src/page-template')

// await fs.writeFile(locationofFile, dataInput, )

async function writeToFile(fileName, data) {
    try {
      const fileWritten = await fs.writeFile(`./${fileName}.html`, data);
      console.log("yay it worked", fileWritten);
    } catch (error) {
      console.log(err);
    }
  }

async function myTeamInfo() {
  const questions = [
    {
      type: "input",
      name: "managerName",
      message: "What is the managers name?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the managers Email?",
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the managers employee ID?",
    },
    {
      type: "input",
      name: "managerOffice",
      message: "What is the managers office number?",
    },
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineers name?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineers Email?",
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is the engineers employee ID?",
    },
    {
      type: "input",
      name: "engineerGitHub",
      message: "What is the engineers GitHub username?",
    },
    {
      type: "input",
      name: "internName",
      message: "What is the interns name?",
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the interns Email?",
    },
    {
      type: "input",
      name: "internId",
      message: "What is the interns employee ID?",
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is the interns school?",
    },
  ];

  const answers = await inquirer.prompt(questions)
  console.log(answers)
const pageCreation = generatePage(answers)
console.log(pageCreation)
writeToFile('index', pageCreation)
}


myTeamInfo()