import { BaseDto } from './base-dto';
import {DtoDescription} from './dto-description';

@DtoDescription({
    nameInUrl: 'loginAttempts',
})
export class LoginAttempt extends BaseDto {
    username: string;
    password: string;
    provider: string;
    success: boolean;
    jwtToken: string;
    sessionId: string;
    user: number;
    remoteAddress: string;
}
