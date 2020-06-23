const boiling = require('./backend.js');

const temp = getInput(0);

const tempUnit = getInput(1);

const pressure = getInput(2);

console.log(boiling(temp, tempUnit, pressure));

function getInput(i) {
    return process.argv[i + 2];
}