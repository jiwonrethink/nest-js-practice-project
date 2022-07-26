import { Body, Controller, Get, HostParam, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id/:name')
  getHello(
    @Req() req: Request,
    @Param() params: { id: string; name: string },
  ): string {
    console.log(params);
    return this.appService.getHello();
  }
}
