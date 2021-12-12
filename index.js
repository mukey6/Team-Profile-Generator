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
const generatePage = require("./src/page-template");


// await fs.writeFile(locationofFile, dataInput, )

let managers;
let engineers = [];
let interns = [];

async function writeToFile(fileName, data) {
  try {
    const fileWritten = await fs.writeFile(`./${fileName}.html`, data);
  } catch (error) {
    console.log(err);
  }
}
async function manager() {
  const managerAnswers = await inquirer.prompt([
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
      type: "list",
      name: "nextEmployee",
      message: "what would you like to add next?",
      choices: ["intern", "engineer", "no more employee needed"],
      default: [2],
    },
    // get answer from the prompt
  ]);
  managers = managerAnswers;
  console.log("manger", managers);
  if (managerAnswers.nextEmployee === "intern") {
    intern();
  } else if (managerAnswers.nextEmployee === "engineer") {
    engineer();
  } else {
    myTeamInfo();
  }
}

async function engineer() {
  const engineerAnswers = await inquirer.prompt([
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
      type: "list",
      name: "nextEmployee",
      message: "what would you like to add next?",
      choices: ["intern", "engineer", "no more employee needed"],
      default: [2],
    },
  ]);
  engineers.push(engineerAnswers);

  console.log("engineer", engineers);
  if (engineerAnswers.nextEmployee === "intern") {
    intern();
  } else if (engineerAnswers.nextEmployee === "engineer") {
    engineer();
  } else {
    myTeamInfo();
  }
}
async function intern() {
  const internAnswers = await inquirer.prompt([
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
    {
      type: "list",
      name: "nextEmployee",
      message: "what would you like to add next?",
      choices: ["intern", "engineer", "no more employee needed"],
      default: [2],
    },
  ]);
  interns.push(internAnswers);
  console.log("intern", interns);
  if (internAnswers.nextEmployee === "intern") {
    console.log("intern" + internAnswers);
    intern();
  } else if (internAnswers.nextEmployee === "engineer") {
    engineer();
  } else {
    myTeamInfo();
  }
}

async function myTeamInfo() {
  console.log("getting to teaminfo");
  console.log(managers, engineers, interns);
  const pageCreation = await generatePage(managers, engineers, interns);

  console.log(pageCreation);
  await writeToFile("index", pageCreation);
}
manager();

// myTeamInfo()

// const answers = await inquirer.prompt(questions)
// console.log(answers)
// const pageCreation = generatePage(answers)
// console.log(pageCreation)
// writeToFile('index', pageCreation)
