import { Relationship, JsonapiObject } from './jsonapi-object';
import { DtoDescription } from './dto-description';
import { UserAttributes } from './user-attributes';
import { LoginAttemptAttributes } from './login-attempt-attributes';

@DtoDescription({
    nameInUrl: 'loginAttempts',
})
export class LoginAttempt extends JsonapiObject<LoginAttemptAttributes>  {
    constructor(attributes: LoginAttemptAttributes) {
        super(LoginAttempt);
        this.attributes = attributes;
    }
    attributes: LoginAttemptAttributes;
}
