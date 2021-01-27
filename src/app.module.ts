import { UsersModule } from './server/api/user/users.module';
import { ServiceModule } from './server/api/service/service.module';
import { ProductModule } from './server/api/product/product.module';
import { EventModule } from './server/api/event/event.module';
import { EspaceModule } from './server/api/espace/espace.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    ServiceModule,
    ProductModule,
    EventModule,
    EspaceModule,
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
