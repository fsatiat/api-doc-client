import { Controller, Get } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiInternalServerErrorResponse,
  ApiMethodNotAllowedResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import { NOTFOUND } from 'dns';
import { ErrorDTO } from '../core/error/error.dto';
import {
  buildError,
  NOT_AUTHENTICATED,
  NOT_FOUND,
  REQUEST_FAILED,
} from '../swagger/constant';
import { CostCenterDTO } from './dto/costcenter.dto';

@ApiTags('Cost Center')
@Controller('costcenter')
export class CostCenterController {
  @Get()
  @ApiBearerAuth('Bearer')
  @ApiOperation({ summary: 'Return all cost center' })
  @ApiUnauthorizedResponse(buildError({ ...NOT_AUTHENTICATED }))
  @ApiInternalServerErrorResponse(buildError({ ...REQUEST_FAILED }))
  @ApiBearerAuth()
  getAll(): CostCenterDTO[] {
    const costcenter: CostCenterDTO = {
      id: 1,
      name: 'PO RH',
    };

    return [costcenter];
  }
}
