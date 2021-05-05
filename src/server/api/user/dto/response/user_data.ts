import { ApiProperty } from '@nestjs/swagger';

export class UserData {
  @ApiProperty({ example: 'AZ89' })
  id: string;

  @ApiProperty({ example: 'ID already exist' })
  description: string;

  @ApiProperty({ example: false })
  success: boolean;
}
