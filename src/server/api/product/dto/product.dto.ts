import { ApiProperty } from "@nestjs/swagger";

export class ProductDTO {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: "" })
  name: string;

  @ApiProperty({ example: "" })
  pictureBase64: string;

  @ApiProperty({ example: "Category 1" })
  category: string;

  @ApiProperty({ example: "Famille 1" })
  famille: string;

  @ApiProperty({ example: "Sous Famille 1" })
  sousfamille: string;

  @ApiProperty({ example: "Sel, Poivre" })
  ingredients: string;
}