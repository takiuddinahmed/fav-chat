import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const globalPrefix = "api"
  const port = 3002;

  const app = await NestFactory.create(AppModule, {
    logger: [
      'error', 'warn', 'debug', 'verbose'
    ]
  });

  app.setGlobalPrefix(globalPrefix)
  app.enableCors({origin: '*'})

  await app.listen(3002);

  Logger.warn(`Application running on http://localhost:${port}/${globalPrefix}`)

}
bootstrap();
