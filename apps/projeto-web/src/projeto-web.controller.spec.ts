import { Test, TestingModule } from '@nestjs/testing';
import { ProjetoWebController } from './projeto-web.controller';
import { ProjetoWebService } from './projeto-web.service';

describe('ProjetoWebController', () => {
  let projetoWebController: ProjetoWebController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProjetoWebController],
      providers: [ProjetoWebService],
    }).compile();

    projetoWebController = app.get<ProjetoWebController>(ProjetoWebController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(projetoWebController.getHello()).toBe('Hello World!');
    });
  });
});
