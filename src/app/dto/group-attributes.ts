import { DtoDescription } from './dto-description';
import { AttributesBase } from './jsonapi-object';


export class GroupAttributes extends AttributesBase {
    name: string;
    description?: string;
    openToAll?: boolean;
    thumbUrl?: string;
}
