import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigDTO } from './config/config_dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);
  const db: Map<string, ConfigDTO> = configService.get('sites');

  console.log(db);

  for (let key in db) {
    const value: ConfigDTO = db[key];

    const config = new DocumentBuilder()
      .setTitle('Lecointre Paris - API')
      .setDescription('Documentation')
      .setVersion('1.0')
      .addBearerAuth()
      .addServer(value.url, value.name)
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(value.name, app, document);
  }

  await app.listen(process.env.PORT || 8080);
}
bootstrap();
