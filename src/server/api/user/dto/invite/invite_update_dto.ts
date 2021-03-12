import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";

@ApiExtraModels()
export class InviteUpdateDto {
  @ApiProperty({ example: "001561A" })
  id: string;

  @ApiProperty({ example: "AED156A" })
  badge_number: string;

  @ApiProperty({ example: "Doe" })
  last_name: string;

  @ApiProperty({ example: "John" })
  first_name: string;

  @ApiProperty({ example: "4596" })
  matricule: string;

  @ApiProperty({ example: "74AP" })
  analytic: string;

  @ApiProperty({ example: 1 })
  id_cost_center: number;
}