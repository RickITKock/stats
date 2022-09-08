import fs from "fs";

export class CsvFileReader {
  data: string[][] = [];
  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, "utf8")
      .split("\n")
      .map((line: string): string[] => {
        return line.split(",");
      });
  }
}
