import { ProductModule } from './server/api/product/product.module';
import { EventModule } from './server/api/event/event.module';
import { EspaceModule } from './server/api/espace/espace.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ProductModule, EventModule, EspaceModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
