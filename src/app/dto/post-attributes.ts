import { DtoDescription } from './dto-description';
import { AttributesBase } from './jsonapi-object';


export class PostAttributes extends AttributesBase {
    toAll: boolean;
    read: boolean;
    title: string;
    content: string;
}
