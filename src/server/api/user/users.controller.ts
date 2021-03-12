import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiForbiddenResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOperation, ApiQuery, ApiResponse, ApiTags, ApiUnauthorizedResponse, getSchemaPath } from '@nestjs/swagger';
import { BADGE_ALREADY_EXIST, buildError, EMAIL_ALREADY_EXIST, FORBIDDEN, ID_ALREADY_EXIST, INVALID_PARAMETER, MATRICULE_ALREADY_EXIST, NOT_AUTHENTICATED, NOT_FOUND, REQUEST_FAILED, Status } from '../swagger/constant';
import { UserCreateDto, UserUpdateDto } from './dto/create.dto';
import { InviteCreateDto } from './dto/invite/invite_create_dto';
import { InviteUpdateDto } from './dto/invite/invite_update_dto';
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
  getAll(@Query('status') status?: Status): UserDTO[] {
    return [userTest];
  }

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiBearerAuth()
  @ApiBadRequestResponse(buildError({ ...INVALID_PARAMETER, ...EMAIL_ALREADY_EXIST, ...BADGE_ALREADY_EXIST, ...MATRICULE_ALREADY_EXIST, ...ID_ALREADY_EXIST }))
  @ApiInternalServerErrorResponse(buildError({ ...REQUEST_FAILED }))
  @ApiUnauthorizedResponse(buildError({ ...NOT_AUTHENTICATED }))
  @ApiForbiddenResponse(buildError({ ...FORBIDDEN }))
  @ApiNotFoundResponse(buildError({ ...NOT_FOUND }))
  @ApiBody({
    schema: {
      anyOf: [
        { $ref: getSchemaPath(InviteCreateDto), },
        { $ref: getSchemaPath(SalarieCreateDto), }
      ]
    }
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
  findOne(@Param('id') id: number): UserDTO {
    return userTest;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Disable a user' })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse(buildError({ ...NOT_AUTHENTICATED }))
  @ApiForbiddenResponse(buildError({ ...FORBIDDEN }))
  @ApiNotFoundResponse(buildError({ ...NOT_FOUND }))
  deleteOne(@Param('id') id: number): UserDTO {
    return userTest;
  }

  @Post(':id')
  @ApiOperation({ summary: 'Update user' })
  @ApiBearerAuth()
  @ApiBadRequestResponse(buildError({ ...INVALID_PARAMETER, ...EMAIL_ALREADY_EXIST, ...BADGE_ALREADY_EXIST, ...MATRICULE_ALREADY_EXIST, ...ID_ALREADY_EXIST }))
  @ApiForbiddenResponse(buildError({ ...FORBIDDEN }))
  @ApiNotFoundResponse(buildError({ ...NOT_FOUND }))
  @ApiInternalServerErrorResponse(buildError({ ...REQUEST_FAILED }))
  @ApiBody({
    schema: {
      oneOf: [
        { $ref: getSchemaPath(SalarieUpdateDto), },
        { $ref: getSchemaPath(InviteUpdateDto), }
      ]
    }
  })
  updateOne(@Param('id') id: number, @Body() user: UserUpdateDto): UserDTO {
    return userTest;
  }
}

const userTest: UserDTO = {
  id: "001561A",
  badge_number: "AED156A",
  last_name: "Doe",
  first_name: "John",
  email: "john.doe@mail.com",
  matricule: "4596",
  analytic: "74AP",
  id_service: 1,
  active: true,
  id_type_compte: 8,
  id_cost_center: 1
}