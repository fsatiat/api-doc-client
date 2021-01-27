import { ApiProperty } from "@nestjs/swagger";

export class ErrorDTO {
  @ApiProperty({ example: 500 })
  statusCode: number;

  @ApiProperty({ example: "SERVER_ERROR" })
  code: string;

  @ApiProperty({ example: "Internal server error" })
  detail: string
}