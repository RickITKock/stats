"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("../utils");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    constructor(filename) {
        super(filename);
        this.filename = filename;
        this.mapRows = [];
    }
    mapRow(line) {
        return [
            (0, utils_1.dateStringToDate)(line[0]),
            line[1],
            line[2],
            parseInt(line[3]),
            parseInt(line[4]),
            line[5],
            line[6],
        ];
    }
}
exports.MatchReader = MatchReader;
