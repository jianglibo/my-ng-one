import { DtoDescription } from './dto-description';
import { GroupAttributes } from './group-attributes';
import { JsonapiObject, Relationship } from './jsonapi-object';

type RelationNames = 'creator' | 'members' | 'receivedPosts';

@DtoDescription({
    nameInUrl: 'groups',
})
export class Role extends JsonapiObject<GroupAttributes> {
    constructor(attributes: GroupAttributes) {
        super(Role);
        this.attributes = attributes;
    }
    attributes: GroupAttributes;
    relationships?: {[key in RelationNames]?: Relationship; };
}
