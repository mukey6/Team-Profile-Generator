const fs = require("fs/promises");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const employeePrompt = require("./prompts");
const prompts = require("./prompts");

// let managers;
// let engineers = [];
// let interns = [];

async function writeToFile(fileName, data) {
  try {
    const fileWritten = await fs.writeFile(`./${fileName}.html`, data);
  } catch (error) {
    console.log(err);
  }
}

async function myTeamInfo() {
  console.log("getting to teaminfo");
  console.log(managers, engineers, interns);
  const pageCreation = await generatePage(managers, engineers, interns);

  console.log(pageCreation);
  await writeToFile("index", pageCreation);
}

// myTeamInfo()
const employeeList = [];
const managers = [];
const engineers = [];
const interns = [];
async function FinalAnswers() {
  const answers = await inquirer.prompt(prompts.employee);
  if (answers.role === "manager") {
    managers.push(answers);
  } else if (answers.role === "engineer") {
    engineers.push(answers)
  } else {
    interns.push(answers)
  }


  const continueQuestions = await inquirer.prompt(prompts.continue);
  if (continueQuestions.continue) {
    FinalAnswers();
  } else {
    console.log(interns, engineers, managers);
    console.log("you have selected no more employees");
    const pageCreation = await generatePage(managers, engineers, interns);
    await writeToFile("index", pageCreation);
    
  }
}
FinalAnswers();
//
