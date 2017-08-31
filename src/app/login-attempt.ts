import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';
import { DtoBase } from './dto-base';

@JsonApiModelConfig({
   type: 'loginAttempts'
})
export class LoginAttempt extends DtoBase {
    @Attribute()
    username: string;
    @Attribute()
    password: string;
    @Attribute()
    provider: string;
    @Attribute()
    success: boolean;
    @Attribute()
    jwtToken: string;
    @Attribute()
    sessionId: string;
    @Attribute()
    user: number;
    @Attribute()
    remoteAddress: string;
}
