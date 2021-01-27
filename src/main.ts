import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);
  const url = configService.get<string>('URL')
  const name = configService.get<string>('NAME')

  const config = new DocumentBuilder()
    .setTitle('Lecointre Paris - API')
    .setDescription('Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .addServer(url, name)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
