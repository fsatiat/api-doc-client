import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);
  const db = configService.get('sites');
  console.log(db);

  const config = new DocumentBuilder()
    .setTitle('Lecointre Paris - API')
    .setDescription('Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    // .addServer(item)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
