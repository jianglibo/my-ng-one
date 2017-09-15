import { DtoDescription } from './dto-description';
import { PostAttributes } from './post-attributes';
import { JsonapiObject, Relationship } from './jsonapi-object';

type RelationNames = 'sharedUsers' | 'creator' | 'sharedGroups' | 'media';

@DtoDescription({
    nameInUrl: 'posts',
})
export class Post extends JsonapiObject<PostAttributes> {
    constructor(attributes: PostAttributes) {
        super(Post);
        this.attributes = attributes;
    }
    attributes: PostAttributes;
    relationships?: {[key in RelationNames]?: Relationship; };
}
