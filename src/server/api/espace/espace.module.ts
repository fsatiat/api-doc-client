import { Module } from '@nestjs/common';
import { EspaceController } from './espace.controller';

@Module({
    imports: [],
    controllers: [EspaceController],
    providers: [],
})
export class EspaceModule { }
