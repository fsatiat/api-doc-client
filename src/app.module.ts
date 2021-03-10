import { TypeCompteController } from './server/api/type_compte/typecompte.controller';
import { TypeCompteModule } from './server/api/type_compte/typecompte.module';
import { UsersModule } from './server/api/user/users.module';
import { ServiceModule } from './server/api/service/service.module';
import { ProductModule } from './server/api/product/product.module';
import { EventModule } from './server/api/event/event.module';
import { EspaceModule } from './server/api/espace/espace.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { ConfigFactory } from '@nestjs/config/dist/interfaces';

@Module({
  imports: [
    TypeCompteModule,
    UsersModule,
    ServiceModule,
    ProductModule,
    EventModule,
    EspaceModule,
    ConfigModule.forRoot({ load: [configuration] }),
  ],
  controllers: [
    TypeCompteController,],
  providers: [],
})
export class AppModule { }