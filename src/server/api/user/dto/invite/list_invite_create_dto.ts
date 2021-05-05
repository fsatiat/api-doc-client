import { SalarieCreateDto } from '../salarie/salarie_create_dto';
import { SalarieUpdateDto } from '../salarie/salarie_update_dto';
import { InviteCreateDto } from './invite_create_dto';
import { InviteUpdateDto } from './invite_update_dto';

export type ListUserCreateDTO = InviteCreateDto[] & SalarieCreateDto[];
export type ListUserUpdateDTO = InviteUpdateDto[] & SalarieUpdateDto[];
