import { DtoDescription } from './dto-description';
import { MediumAttributes } from './medium-attributes';
import { JsonapiObject, Relationship } from './jsonapi-object';

type RelationNames = 'creator' | 'post';

@DtoDescription({
    nameInUrl: 'media',
})
export class Medium extends JsonapiObject<MediumAttributes> {
    constructor(attributes: MediumAttributes) {
        super(Medium);
        this.attributes = attributes;
    }
    attributes: MediumAttributes;
    relationships?: {[key in RelationNames]?: Relationship; };
}
