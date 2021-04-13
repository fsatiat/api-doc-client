import { ApiProperty } from "@nestjs/swagger";

export class MenuDTO {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: "" })
  name: string;

  @ApiProperty({ example: "Sel, Poivre" })
  ingredients: string;

  @ApiProperty({ example: 0 })
  classement: number;

  @ApiProperty({ example: 1.69 })
  price: number;

  @ApiProperty({example: 1})
  idEspace: number;

  @ApiProperty({ example: "Category 1" })
  category: string;

  @ApiProperty({ example: "Stand 1" })
  stand: string;

  @ApiProperty({ example: "" })
  pictureBase64: string;

  @ApiProperty()
  allergens: AllergenDTO[]
}

export class AllergenDTO {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: "Lactose" })
  name: string;

  @ApiProperty({ example: "" })
  pictureBase64: string;
}