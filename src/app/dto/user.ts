import { DtoDescription } from './dto-description';
import { UserAttributes } from './user-attributes';
import { JsonapiObject, Relationship } from './jsonapi-object';

type RelationNames = 'unreads' | 'followers' | 'abc';

@DtoDescription({
    nameInUrl: 'users',
})
export class User extends JsonapiObject<UserAttributes> {
    constructor(attributes: UserAttributes) {
        super(User);
        this.attributes = attributes;
    }
    attributes: UserAttributes;
    relationships?: {[key in RelationNames]?: Relationship; };
}
