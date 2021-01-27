import { ServiceController } from './service.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [ServiceController,],
    providers: [],
})
export class ServiceModule { }
