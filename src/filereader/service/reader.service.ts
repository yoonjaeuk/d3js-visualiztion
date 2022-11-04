import { Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import * as _ from 'lodash';
import { take } from 'rxjs';

@Injectable()
export class ReaderService {
  constructor() {
    this.readCsvToJSON('최종_데이터.csv').then(console.log); //readFile or readCsvToJson중 고름
    console.log('ReaderService constructor', __dirname);
  }

  public async readFile(path: string) {
    const result = readFileSync(join(__dirname, '../../../data/', path));
    return result.toString();
  }

  public async readCsvToJSON(path: string) {
    const result = readFileSync(join(__dirname, '../../../data/', path));
    const lines = result.toString().replace(/\"/g, '').split('\n');
    const headers = lines[0].split(',');

    const data: { [key in string]: number | string }[] = [];
    for (let i = 1; i < lines.length - 1; i++) {
      const line = lines[i];
      const value = line.split(',');
      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = value[j];
      }
      data.push(obj);
    }

    const rr = _(data);
    console.log(rr);

    writeFileSync(
      join(__dirname, '../../../output/최종_데이터.json'),
      JSON.stringify(rr, null, 8),
    );

    return data;
  }
}
