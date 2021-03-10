import { ApiProperty } from "@nestjs/swagger";

export class UserRequestDTO {
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

  @ApiProperty({ example: "4596" })
  matricule: string;

  @ApiProperty({ example: "74AP" })
  analytic: string;

  @ApiProperty({ example: 1 })
  id_service: number;
}