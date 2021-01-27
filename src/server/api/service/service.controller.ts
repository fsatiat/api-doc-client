import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiInternalServerErrorResponse, ApiMethodNotAllowedResponse, ApiNotFoundResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ErrorDTO } from '../core/error/error.dto';
import { ServiceDTO } from './dto/service.dto';

@ApiTags('Service')
@Controller('service')
export class ServiceController {

  @Get()
  @ApiBearerAuth('Bearer')
  @ApiOperation({ summary: 'Return all service' })
  @ApiUnauthorizedResponse({ type: ErrorDTO })
  @ApiInternalServerErrorResponse({ description: 'Internal server error.', type: ErrorDTO })
  getAll(): ServiceDTO[] {
    const service: ServiceDTO = {
      id: 1,
      name: 'PO RH'
    }

    return [service];
  }
}
