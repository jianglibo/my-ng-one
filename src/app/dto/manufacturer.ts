import { DtoDescription } from './dto-description';
import { ManufacturerAttributes } from './manufacturer-attributes';
import { JsonapiObject, Relationship } from './jsonapi-object';

type RelationNames = 'mtSerieses';

@DtoDescription({
    nameInUrl: 'posts',
})
export class Manufacturer extends JsonapiObject<ManufacturerAttributes> {
    constructor(attributes: ManufacturerAttributes) {
        super(Manufacturer);
        this.attributes = attributes;
    }
    attributes: ManufacturerAttributes;
    relationships?: {[key in RelationNames]?: Relationship; };
}
