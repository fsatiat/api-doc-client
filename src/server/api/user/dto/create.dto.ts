import { InviteCreateDto } from "./invite/invite_create_dto";
import { InviteUpdateDto } from "./invite/invite_update_dto";
import { SalarieCreateDto } from "./salarie/salarie_create_dto";
import { SalarieUpdateDto } from "./salarie/salarie_update_dto";

export type UserCreateDto = SalarieCreateDto | InviteCreateDto;
export type UserUpdateDto = SalarieUpdateDto | InviteUpdateDto;