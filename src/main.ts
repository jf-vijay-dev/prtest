import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// The main.ts includes an async function, which will bootstrap our application
async function bootstrap() {
  /**
   * To create a Nest application instance, we use the core NestFactory class.
   * NestFactory exposes a few static methods that allow creating an application instance.
   * The create() method returns an application object, which fulfills the INestApplication interface.
   */
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
