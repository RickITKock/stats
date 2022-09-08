import fs from "fs";
import { MatchResult } from "./MatchResult";

export abstract class CsvFileReader<T> {
  data: T[] = [];
  constructor(public fileName: string) {}

  abstract mapRow(line: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, "utf8")
      .split("\n")
      .map((line: string): string[] => {
        return line.split(",");
      })
      .map(this.mapRow);
  }
}
