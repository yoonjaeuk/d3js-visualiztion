import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//@ = Decorator 패턴
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/name')
  getName(): string {
    return 'name';
  }
}
