const fs = require("fs/promises");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const prompts = require("./prompts");
const Manager = require("./lib/Manager");

const managers = [];
const engineers = [];
const interns = [];

async function writeToFile(fileName, data) {
  try {
    const fileWritten = await fs.writeFile(`./dist/${fileName}.html`, data);
  } catch (error) {
    console.log(err);
  }
}

async function manager() {
  const { name, email, employeeId, officeNumber } = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `What is the manager's name?`,
    },
    {
      type: "input",
      name: "email",
      message: `What is the manager's email?`,
    },
    {
      type: "input",
      name: "employeeId",
      message: `What is the manager's employee Id?`,
    },
    {
      type: "input",
      name: "officeNumber",
      message: `What is the manager's office number?`,
    },
  ]);
  const manager = new Manager(name, email, employeeId, officeNumber);
  managers.push(manager);

  getRolePrompt();
}

manager();

async function getRolePrompt() {
  const answers = await inquirer.prompt(prompts.employee);
  if (answers.role === "engineer") {
    engineers.push(answers);
  } else {
    interns.push(answers);
  }

  const continueQuestions = await inquirer.prompt(prompts.continue);
  if (continueQuestions.continue) {
    getRolePrompt();
  } else {
    console.log("you have selected no more employees");
    const pageCreation = await generatePage(managers, engineers, interns);
    await writeToFile("index", pageCreation);
  }
}
