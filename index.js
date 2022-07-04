import inquirer from 'inquirer';
import questions from './questions.js'
import mdGen from './mdGen.js';

inquirer.prompt(questions).then(mdGen)