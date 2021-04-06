import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";

@ApiExtraModels()
export class SalarieCreateDto {
  @ApiProperty({ example: "001561A" })
  id: string;

  @ApiProperty({ example: "AED156A" })
  badge_number: string;

  @ApiProperty({ example: "Doe" })
  last_name: string;

  @ApiProperty({ example: "John" })
  first_name: string;

  @ApiProperty({ example: "john.doe@mail.com" })
  email: string;

  @ApiProperty({ example: "A4596", required: false })
  matricule: string;

  @ApiProperty({ example: "74AP", required: false })
  analytic: string;

  @ApiProperty({ example: 1 })
  id_service: number;

  @ApiProperty({ example: 8 })
  id_type_compte: number;

  @ApiProperty({example: 1, required: false})
  id_cost_center?: number;
}