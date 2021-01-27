import { EventController } from './event.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [EventController,],
    providers: [],
})
export class EventModule { }