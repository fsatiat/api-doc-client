import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";

@ApiExtraModels()
export class InviteCreateDto {
  @ApiProperty({ example: "001561A" })
  id: string;

  @ApiProperty({ example: "AED156A" })
  badge_number: string;

  @ApiProperty({ example: "Doe" })
  last_name: string;

  @ApiProperty({ example: "John" })
  first_name: string;

  @ApiProperty({ example: "A4596", required: false })
  matricule: string;

  @ApiProperty({ example: "74AP", required: false })
  analytic: string;

  @ApiProperty({ example: 1 })
  id_cost_center: number;

  @ApiProperty({ example: 14 })
  id_type_compte: number;
}