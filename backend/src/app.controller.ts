import { Controller, Post, Body, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/health-check')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() body, @Res() res) {
    try {
      const data = await this.appService.save(body);
      res.json(data);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Error', error: e });
    }
  }
}
