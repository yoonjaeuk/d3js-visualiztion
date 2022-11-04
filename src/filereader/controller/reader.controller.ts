import { Controller, Get, Query } from '@nestjs/common';
import { query } from 'express';
import { ReaderService } from '../service/reader.service';
//@ = Decorator 패턴
@Controller('/reader')
export class ReaderController {
  constructor(private readonly readService: ReaderService) {}
  //Query
  //? 뒤에 위치
  //key = value&key=value&key=value
  //param
  @Get('/get-file')
  async getHello(@Query('path') query) {
    if (!query) {
      return 'path is required';
    }
    console.log(query);
    return await this.readService.readFile(query);
  }

  @Get('/get-csv-to-json')
  async getCSVToJson(@Query('path') path: string) {
    return path ? this.readService.readCsvToJSON(path) : 'path is required';
  }
}
