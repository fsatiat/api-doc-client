import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiForbiddenResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOperation, ApiQuery, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ErrorDTO } from '../core/error/error.dto';
import { BADGE_ALREADY_EXIST, buildError, EMAIL_ALREADY_EXIST, FORBIDDEN, ID_ALREADY_EXIST, INVALID_PARAMETER, MATRICULE_ALREADY_EXIST, NOT_AUTHENTICATED, NOT_FOUND, REQUEST_FAILED, Status } from '../swagger/constant';
import { UserDTO } from './dto/user.dto';
import { UserRequestDTO } from './dto/user_request.dto';

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
  @ApiOperation({ summary: 'Update user' })
  @ApiBearerAuth()
  @ApiBadRequestResponse(buildError({ ...INVALID_PARAMETER, ...EMAIL_ALREADY_EXIST, ...BADGE_ALREADY_EXIST, ...MATRICULE_ALREADY_EXIST, ...ID_ALREADY_EXIST }))
  @ApiInternalServerErrorResponse(buildError({ ...REQUEST_FAILED }))
  @ApiUnauthorizedResponse(buildError({ ...NOT_AUTHENTICATED }))
  @ApiForbiddenResponse(buildError({ ...FORBIDDEN }))
  @ApiNotFoundResponse(buildError({ ...NOT_FOUND }))
  create(@Body() user: UserRequestDTO): UserRequestDTO {
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
  updateOne(@Param('id') id: number, @Body() user: UserDTO): UserDTO {
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
  active: true
}