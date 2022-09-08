import { CsvFileReader } from "./inheritance/CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const fileName: string = "football.csv";
const csvFileReader = new CsvFileReader(fileName);
const matchReader = new MatchReader(csvFileReader);

let manUnitedWins = 0;

matchReader.load();

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.homeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.awayWin) {
    manUnitedWins++;
  }
}

console.log(matchReader);
console.log(`Amount of times man united won:\t${manUnitedWins}`);
