import { DtoDescription } from './dto-description';
import { AttributesBase } from './jsonapi-object';

export type Gender = "FEMALE" | "MALE";

export class UserAttributes extends AttributesBase {
    country?: string;
    gender?: Gender = "FEMALE";
    city?: string;
    displayName?: string;
    credentialsNonExpired?: boolean;
    mobile?: string;
    mobileVerified?: boolean;
    language?: string;
    avatar?: string;
    enabled?: boolean;
    emailVerified?: boolean;
    password?: string;
    province?: string;
    name?: string;
    accountNonExpired?: boolean;
    accountNonLocked?: boolean;
    email?: string;
}
