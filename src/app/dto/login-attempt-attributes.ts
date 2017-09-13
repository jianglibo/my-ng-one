import {DtoDescription} from './dto-description';
import { AttributesBase } from './jsonapi-object';

export class LoginAttemptAttributes extends AttributesBase {
    username: string;
    password: string;
    provider?: string;
    success?: boolean;
    jwtToken?: string;
    sessionId?: string;
    user?: number | string;
    remoteAddress?: string;
}
