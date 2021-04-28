import { Controller, Get } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ErrorDTO } from '../core/error/error.dto';
import { EventDTO } from './dto/event.dto';

@ApiTags('Event')
@Controller('event')
export class EventController {
  @Get()
  @ApiOperation({ summary: 'Get all events' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error.',
    type: ErrorDTO,
  })
  @ApiBearerAuth()
  findAll(): EventDTO[] {
    const event: EventDTO = {
      id: 1,
      description: 'Description',
      pictureBase64: '',
    };

    return [event];
  }
}
