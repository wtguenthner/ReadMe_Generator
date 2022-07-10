import inquirer from 'inquirer';
import questions from './questions.js'
import mdGen from './mdGen.js';
//Starts program and displays questions in the questions.js file
inquirer.prompt(questions).then(mdGen)