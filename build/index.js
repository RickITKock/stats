"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./inheritance/CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const fileName = "football.csv";
const csvFileReader = new CsvFileReader_1.CsvFileReader(fileName);
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
let manUnitedWins = 0;
matchReader.load();
for (let match of matchReader.matches) {
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.awayWin) {
        manUnitedWins++;
    }
}
console.log(matchReader);
console.log(`Amount of times man united won:\t${manUnitedWins}`);
