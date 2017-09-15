import { DtoDescription } from './dto-description';
import { RoleAttributes } from './role-attributes';
import { JsonapiObject, Relationship } from './jsonapi-object';

type RelationNames = 'users';

@DtoDescription({
    nameInUrl: 'roles',
})
export class Role extends JsonapiObject<RoleAttributes> {
    constructor(attributes: RoleAttributes) {
        super(Role);
        this.attributes = attributes;
    }
    attributes: RoleAttributes;
    relationships?: {[key in RelationNames]?: Relationship; };
}
