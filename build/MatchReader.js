"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    static fromCsv(fileName) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(fileName));
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((line) => {
            return [
                (0, utils_1.dateStringToDate)(line[0]),
                line[1],
                line[2],
                parseInt(line[3]),
                parseInt(line[4]),
                line[5],
                line[6],
            ];
        });
    }
}
exports.MatchReader = MatchReader;
