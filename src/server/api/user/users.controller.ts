import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiParam,
  ApiQuery, ApiTags,
  ApiUnauthorizedResponse,
  getSchemaPath
} from '@nestjs/swagger';
import {
  BADGE_ALREADY_EXIST,
  buildError,
  EMAIL_ALREADY_EXIST,
  FORBIDDEN,
  ID_ALREADY_EXIST,
  INVALID_PARAMETER,
  MATRICULE_ALREADY_EXIST,
  NOT_AUTHENTICATED,
  NOT_FOUND,
  REQUEST_FAILED,
  Status
} from '../swagger/constant';
import { UserCreateDto, UserUpdateDto } from './dto/create.dto';
import { InviteCreateDto } from './dto/invite/invite_create_dto';
import { InviteUpdateDto } from './dto/invite/invite_update_dto';
import {
  ListUserCreateDTO,
  ListUserUpdateDTO
} from './dto/invite/list_invite_create_dto';
import { UserData } from './dto/response/user_data';
import { SalarieCreateDto } from './dto/salarie/salarie_create_dto';
import { SalarieUpdateDto } from './dto/salarie/salarie_update_dto';
import { UserDTO } from './dto/user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse(buildError({ ...NOT_AUTHENTICATED }))
  @ApiInternalServerErrorResponse(buildError({ ...REQUEST_FAILED }))
  @ApiQuery({ name: 'status', enum: Status, required: false })
  @ApiBearerAuth()
  getAll(@Query('status') status?: Status): UserDTO[] {
    return [userTest];
  }

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiBearerAuth()
  @ApiBadRequestResponse(
    buildError({
      ...INVALID_PARAMETER,
      ...EMAIL_ALREADY_EXIST,
      ...BADGE_ALREADY_EXIST,
      ...MATRICULE_ALREADY_EXIST,
      ...ID_ALREADY_EXIST,
    }),
  )
  @ApiInternalServerErrorResponse(buildError({ ...REQUEST_FAILED }))
  @ApiUnauthorizedResponse(buildError({ ...NOT_AUTHENTICATED }))
  @ApiForbiddenResponse(buildError({ ...FORBIDDEN }))
  @ApiNotFoundResponse(buildError({ ...NOT_FOUND }))
  @ApiBearerAuth()
  @ApiBody({
    schema: {
      anyOf: [
        { $ref: getSchemaPath(InviteCreateDto) },
        { $ref: getSchemaPath(SalarieCreateDto) },
      ],
    },
  })
  create(@Body() user: UserCreateDto): UserDTO {
    return userTest;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one user' })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse(buildError({ ...NOT_AUTHENTICATED }))
  @ApiForbiddenResponse(buildError({ ...FORBIDDEN }))
  @ApiNotFoundResponse(buildError({ ...NOT_FOUND }))
  @ApiBearerAuth()
  findOne(@Param('id') id: number): UserDTO {
    return userTest;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Disable a user' })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse(buildError({ ...NOT_AUTHENTICATED }))
  @ApiForbiddenResponse(buildError({ ...FORBIDDEN }))
  @ApiNotFoundResponse(buildError({ ...NOT_FOUND }))
  @ApiBearerAuth()
  deleteOne(@Param('id') id: number): UserDTO {
    return userTest;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update user' })
  @ApiBearerAuth()
  @ApiBadRequestResponse(
    buildError({
      ...INVALID_PARAMETER,
      ...EMAIL_ALREADY_EXIST,
      ...BADGE_ALREADY_EXIST,
      ...MATRICULE_ALREADY_EXIST,
      ...ID_ALREADY_EXIST,
    }),
  )
  @ApiForbiddenResponse(buildError({ ...FORBIDDEN }))
  @ApiNotFoundResponse(buildError({ ...NOT_FOUND }))
  @ApiInternalServerErrorResponse(buildError({ ...REQUEST_FAILED }))
  @ApiBody({
    schema: {
      oneOf: [
        { $ref: getSchemaPath(SalarieUpdateDto) },
        { $ref: getSchemaPath(InviteUpdateDto) },
      ],
    },
  })
  @ApiBearerAuth()
  @ApiParam({name: 'reactivate', 
    type: Boolean, 
    description: 'If true, you can reactivate the user and update it\'s property', 
    required: false,
    enum: [0, 1]
  })
  updateOne(@Param('id') id: number, @Body() user: UserUpdateDto): UserDTO {
    return userTest;
  }

  @Post('/create-all')
  @ApiOperation({ summary: 'Create users' })
  @ApiBearerAuth()
  @ApiBody({
    schema: {
      type: 'array',
      items: {
        anyOf: [
          { $ref: getSchemaPath(InviteCreateDto) },
          { $ref: getSchemaPath(SalarieCreateDto) },
        ],
      },
    },
  })
  createAll(@Body() userList: ListUserCreateDTO): UserData[] {
    let userData: UserData;
    userData.id = 'AZ78';
    userData.success = false;
    userData.description = 'ID already exist';

    let userData2: UserData;
    userData2.id = '96QS';
    userData2.success = true;
    userData2.description = '';

    return [userData, userData2];
  }

  @Patch('/update-all')
  @ApiOperation({ summary: 'Update users' })
  @ApiBearerAuth()
  @ApiBearerAuth()
  @ApiBody({
    schema: {
      type: 'array',
      items: {
        anyOf: [
          { $ref: getSchemaPath(InviteUpdateDto) },
          { $ref: getSchemaPath(SalarieUpdateDto) },
        ],
      },
    },
  })
  updateAll(@Body() userList: ListUserUpdateDTO): UserData[] {
    let userData: UserData;
    userData.id = 'AZ78';
    userData.success = false;
    userData.description = 'ID already exist';

    return [userData];
  }
}

const userTest: UserDTO = {
  id: '001561A',
  badge_number: 'AED156A',
  last_name: 'Doe',
  first_name: 'John',
  email: 'john.doe@mail.com',
  matricule: '4596',
  analytic: '74AP',
  id_service: 1,
  active: true,
  id_type_compte: 8,
  id_cost_center: 1,
};
