import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";

@ApiExtraModels()
export class InviteUpdateDto {
  @ApiProperty({ example: "001561A", required: false })
  id: string;

  @ApiProperty({ example: "AED156A", required: false })
  badge_number: string;

  @ApiProperty({ example: "Doe", required: false })
  last_name: string;

  @ApiProperty({ example: "John", required: false })
  first_name: string;

  @ApiProperty({ example: "A4596", required: false })
  matricule: string;

  @ApiProperty({ example: "74AP", required: false })
  analytic: string;

  @ApiProperty({ example: 1, required: false })
  id_cost_center: number;
}