import { DtoDescription } from './dto-description';
import { UserAttributes } from './user-attributes';
import { JsonapiObject, Relationship } from './jsonapi-object';

type RelationNames = 'unreads' | 'followers';

@DtoDescription({
    nameInUrl: 'users',
})
export class User extends JsonapiObject<UserAttributes> {
    attributes: UserAttributes;
    relationships: {[key in RelationNames]: Relationship; };
}
