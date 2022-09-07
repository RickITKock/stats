"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const reader = new CSVFileReader_1.CsvFileReader("football.csv");
reader.read();
let manUnitedWins = 0;
var MatchResult;
(function (MatchResult) {
    MatchResult["homeWin"] = "H";
    MatchResult["awayWin"] = "A";
    MatchResult["draw"] = "D";
})(MatchResult || (MatchResult = {}));
for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult.homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult.awayWin) {
        manUnitedWins++;
    }
}
console.log(`Amount of times man united won:\t${manUnitedWins}`);
