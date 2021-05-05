import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
import { CreateCostCenterDTO } from './dto/create-cost-center.dto';
import { UpdateCostCenterDTO } from './dto/update-cost-center.dto';
import { CostCenter } from './entities/cost-center.entity';

@ApiTags('Cost Center')
@Controller('costcenter')
export class CostCenterController {
  @Get()
  @ApiBearerAuth('Bearer')
  @ApiOperation({ summary: 'Return all cost center' })
  @ApiUnauthorizedResponse(buildError({ ...NOT_AUTHENTICATED }))
  @ApiInternalServerErrorResponse(buildError({ ...REQUEST_FAILED }))
  @ApiBearerAuth()
  getAll(): CostCenter[] {
    const costcenter: CostCenter = {
      id: 1,
      name: 'PO RH',
    };

    return [costcenter];
  }

  @Post()
  @ApiBearerAuth('Bearer')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create new Cost Center' })
  @ApiUnauthorizedResponse(buildError({ ...NOT_AUTHENTICATED }))
  @ApiInternalServerErrorResponse(buildError({ ...REQUEST_FAILED }))
  create(@Body() createCostCenterDTO: CreateCostCenterDTO) {
    const costcenter: CostCenter = {
      id: 1,
      name: 'PO RH',
    };

    return costcenter;
  }

  @Post(':id')
  @ApiBearerAuth('Bearer')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update Cost Center' })
  @ApiUnauthorizedResponse(buildError({ ...NOT_AUTHENTICATED }))
  @ApiInternalServerErrorResponse(buildError({ ...REQUEST_FAILED }))
  update(
    @Param('id') costCenterNum: string,
    @Body() updateCostCenterDTO: UpdateCostCenterDTO,
  ) {
    const costcenter: CostCenter = {
      id: 1,
      name: 'PO RH',
    };

    return costcenter;
  }
}
