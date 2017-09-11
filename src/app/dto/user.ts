import { DtoDescription } from './dto-description';
import { UserAttributes } from './user-attributes';
import { JsonapiObject, Relationship } from './jsonapi-object';

@DtoDescription({
    nameInUrl: 'users',
})
export class User extends JsonapiObject<UserAttributes> {
    attributes: UserAttributes;
    relationships: { a: Relationship; };
}
