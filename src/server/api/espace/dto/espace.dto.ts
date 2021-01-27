import { ApiProperty } from '@nestjs/swagger';

export class EspaceDTO {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Espace 1' })
  name: string;
}