import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRows: [] = [];

  constructor(public filename: string) {
    super(filename);
  }

  mapRow(line: string[]): MatchData {
    return [
      dateStringToDate(line[0]),
      line[1],
      line[2],
      parseInt(line[3]),
      parseInt(line[4]),
      line[5] as MatchResult,
      line[6],
    ];
  }
}
