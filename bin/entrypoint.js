#!/usr/bin/env node

const {execSync} = require('child_process');
const {colors} = require('colors');

console.log("Running solana-base-app");

const args = process.argv.slice(2);


const runCommand = (command) => {
    try{
        execSync(command, {stdio: 'inherit'});
    }
    catch(err){
        console.error(err);
        return false;
    }
    return true;

};


const template = args[0];
const folderName = args[1];
const ifAnchor = args[2];

const gitCheckoutCommand = `git clone https://github.com/UjjwalGupta49/solana-base-app ${folderName}`;
const installDependencies = `cd ${folderName} && npm install`;
const shxInstall = `npm install shx --save-dev"`;
const fixAnyErrors = `cd ${folderName} && npm audit fix`;
console.log(`cloning the repository to name ${folderName}`.cyan);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut){
    process.exit(-1);
}

console.log(`installing dependencies`.cyan);
const dependenciesInstalled = runCommand(installDependencies);
if (!dependenciesInstalled){
    process.exit(-1);
}
console.log(`installing shx`.cyan);
const shxInstalled = runCommand(shxInstall);
if (!shxInstalled){
    process.exit(-1);
}
console.log("Scanning for errors...".cyan);
const fixErrors = runCommand(fixAnyErrors);



