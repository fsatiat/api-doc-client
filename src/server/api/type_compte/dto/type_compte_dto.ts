import { ApiProperty } from "@nestjs/swagger";

export class TypeCompteDTO {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: "Salarié" })
  name: string;
}