import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { application } from './shared/enviroment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { port, host, domain } = application;
  await app.listen(port, host, () => console.log(domain));
}
bootstrap();