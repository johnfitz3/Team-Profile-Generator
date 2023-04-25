
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');


const DIST_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(DIST_DIR, "index.html");



const { create } = require('domain');


const employees = [];


const validateInput = (userInput)=> {
  if (userInput===''){
    return 'Input required';
  }else {
    return true;
  }
};
const addEmployee = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'employeeName',
        message: 'Enter employee name'
      },
      {
        type: 'input',
        name: 'employeeId',
        message: 'Enter employee ID'
      },
      {
        type: 'input',
        name: 'employeeEmail',
        message: 'Enter employee Email',
      },
      {
    type: 'list',
    name: 'employeeRole',
    message: 'Select employee role',
    choices: ['Manager', 'Engineer', 'Intern']
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter office number',
        when: (answers) => answers.employeeRole === 'Manager'
      },
      {
        type: 'input',
        name: 'githubUser',
        message: 'Enter github username',
        when:(answers)=> answers.employeeRole === 'Engineer'
      },
      {
        type:'input',
        name: 'schoolName',
        message: 'Enter School Name',
        when: (answers) => answers.employeeRole === 'Intern'
      },
      {
type: 'confirm',
name: 'employeeAdd',
message: 'Would you like to add an employee?'
      },
    ]).then((answers) => {
       employees.push ({
            name: answers.employeeName,
            id: answers.employeeId,
            email: answers.employeeEmail,
            role: answers.employeeRole,
            officeNumber: answers.officeNumber,
            github: answers.githubUser,
            school: answers.schoolName,
            getName: function() {
                return this.name;
            },
        });
       if (answers.employeeAdd) {
        return addEmployee();
       } else {
        return employees;
       }
    });
  };

  function templateHTML(teamMembers) {

  }
  
  function createTeamFile(employees) {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(outputPath, templateHTML(employees), 'utf-8');
    console.log('HTML file created in the dist folder');
  }
  
  function startApp() {
    addEmployee().then((employees) => {
      createTeamFile(employees);
    });
  }
  
  startApp();















