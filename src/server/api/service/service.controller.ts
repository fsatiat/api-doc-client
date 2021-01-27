import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiInternalServerErrorResponse, ApiMethodNotAllowedResponse, ApiNotFoundResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse, getSchemaPath } from '@nestjs/swagger';
import { NOTFOUND } from 'dns';
import { ErrorDTO } from '../core/error/error.dto';
import { buildError, NOT_AUTHENTICATED, NOT_FOUND, REQUEST_FAILED } from '../swagger/constant';
import { ServiceDTO } from './dto/service.dto';

@ApiTags('Service')
@Controller('services')
export class ServiceController {

  @Get()
  @ApiBearerAuth('Bearer')
  @ApiOperation({ summary: 'Return all service' })
  @ApiUnauthorizedResponse(buildError({ ...NOT_AUTHENTICATED }))
  @ApiInternalServerErrorResponse(buildError({ ...REQUEST_FAILED }))
  getAll(): ServiceDTO[] {
    const service: ServiceDTO = {
      id: 1,
      name: 'PO RH'
    }

    return [service];
  }
}