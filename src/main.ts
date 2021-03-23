import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigDTO } from './config/config_dto';
import { InviteCreateDto } from './server/api/user/dto/invite/invite_create_dto';
import { InviteUpdateDto } from './server/api/user/dto/invite/invite_update_dto';
import { SalarieCreateDto } from './server/api/user/dto/salarie/salarie_create_dto';
import { SalarieUpdateDto } from './server/api/user/dto/salarie/salarie_update_dto';
let appInsights = require('applicationinsights');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  appInsights
    .setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY)
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true, true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setUseDiskRetryCaching(true)
    .setSendLiveMetrics(false)
    .setDistributedTracingMode(appInsights.DistributedTracingModes.AI)
    .start();

  const configService: ConfigService = app.get(ConfigService);
  const db: Map<string, ConfigDTO> = configService.get('sites');

  for (let key in db) {
    const value: ConfigDTO = db[key];

    const config = new DocumentBuilder()
      .setTitle('Lecointre Paris - API')
      .setDescription('Documentation')
      .setVersion('1.0')
      .addBearerAuth()
      .addServer(value.url, value.name)
      .build();

    const document = SwaggerModule.createDocument(app, config, {
      extraModels: [
        InviteCreateDto,
        InviteUpdateDto,
        SalarieCreateDto,
        SalarieUpdateDto,
      ],
    });
    SwaggerModule.setup(value.name, app, document);
  }

  await app.listen(process.env.PORT || 8080);
}
bootstrap();
