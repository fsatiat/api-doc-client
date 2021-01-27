import { ApiProperty } from "@nestjs/swagger";

export class EventDTO {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: "Description" })
  description: string;

  @ApiProperty({ example: "" })
  pictureBase64: string;
}