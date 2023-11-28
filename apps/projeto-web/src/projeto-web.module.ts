import { Module } from '@nestjs/common';
import { ProjetoWebController } from './projeto-web.controller';
import { ProjetoWebService } from './projeto-web.service';

@Module({
  imports: [],
  controllers: [ProjetoWebController],
  providers: [ProjetoWebService],
})
export class ProjetoWebModule {}
