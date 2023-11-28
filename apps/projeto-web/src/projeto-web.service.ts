import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjetoWebService {
  getHello(): string {
    return 'Hello World!';
  }
}
