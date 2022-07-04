import fs from 'fs';
const color = () => ['brightgreen', 'blue', 'orange','blue'][Math.floor(Math.random()*3)]
const badge = license => {
    if(license == 'None') return "";
    
    return `![${license}](https://img.shields.io/badge/License-${license}-${color()})`
}

function mdGen(obj) {
    let output = '';

    output = `
# ${obj.title}
${badge(obj.license)}

## Table of Contents:
* [Description](#Description)

* [Usage](#Usage)

* [Contributions](#Contributions)

* [Instructions](#Instructions)

* [Questions](#Questions)



## Description:
${obj.description}

## Usage:
${obj.usage}

## Contributions:
${obj.contributions}

## Instructions:
${obj.instructions}

## Questions
[GitHub](https://github.com/${obj.github})

[Email](mailto:${obj.email})




` 

    fs.writeFile('./README.md', output, err=>{if(err) throw err});
};

export default mdGen;