import { Module } from '@nestjs/common';
import { TypeCompteController } from './typecompte.controller';

@Module({
    imports: [],
    controllers: [TypeCompteController],
    providers: [],
})
export class TypeCompteModule { }
