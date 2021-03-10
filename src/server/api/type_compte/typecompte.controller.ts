import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiInternalServerErrorResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { buildError, NOT_AUTHENTICATED, REQUEST_FAILED } from '../swagger/constant';
import { TypeCompteDTO } from './dto/type_compte_dto';

@ApiTags('Type Compte')
@Controller('typecompte')
export class TypeCompteController {

  @Get()
  @ApiBearerAuth('Bearer')
  @ApiOperation({ summary: 'Return all account type' })
  @ApiUnauthorizedResponse(buildError({ ...NOT_AUTHENTICATED }))
  @ApiInternalServerErrorResponse(buildError({ ...REQUEST_FAILED }))
  getAll(): TypeCompteDTO[] {
    const typecompte: TypeCompteDTO = {
      id: 1,
      name: 'Salarié'
    }

    return [typecompte];
  }
}