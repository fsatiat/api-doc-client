import { ApiProperty } from "@nestjs/swagger";

export class CostCenterDTO {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: "Po RH" })
  name: string;
}