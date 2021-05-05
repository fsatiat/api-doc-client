import { ApiProperty } from '@nestjs/swagger';

export class CreateCostCenterDTO {
  @ApiProperty({ example: 'AZ487QS', required: true })
  number: string;

  @ApiProperty({ example: 'Cost Center 1', required: true })
  name: string;

  @ApiProperty({ example: '[AZ41, AZ87]', required: false })
  managers: number[];
}
