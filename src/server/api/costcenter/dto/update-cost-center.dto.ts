import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateCostCenterDTO } from './create-cost-center.dto';

export class UpdateCostCenterDTO extends PartialType(
  OmitType(CreateCostCenterDTO, ['number']),
) {}
