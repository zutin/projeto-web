import { Controller, Get } from '@nestjs/common';
import { ProjetoWebService } from './projeto-web.service';

@Controller()
export class ProjetoWebController {
  constructor(private readonly projetoWebService: ProjetoWebService) {}

  @Get()
  getHello(): string {
    return this.projetoWebService.getHello();
  }
}
