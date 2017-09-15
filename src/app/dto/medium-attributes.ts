import { DtoDescription } from './dto-description';
import { AttributesBase } from './jsonapi-object';


export class MediumAttributes extends AttributesBase {
    size: number;
    contentType: string;
    url: string;
    originName: string;
}
