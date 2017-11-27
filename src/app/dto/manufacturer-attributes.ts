import { DtoDescription } from './dto-description';
import { AttributesBase } from './jsonapi-object';


export class ManufacturerAttributes extends AttributesBase {
    name: string;
    foundTime: number | string;
    nationality: string;
    founder: string;
    legend: string;
    logo: string;
    slogan: string;
    websites: {[key: string]: string};
}
