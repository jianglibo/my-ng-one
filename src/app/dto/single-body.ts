import { JsonapiObject, AttributesBase } from './jsonapi-object';

export class SingleBody<E extends AttributesBase, T extends JsonapiObject<E>> {
    constructor(jsob: T) {
        this.data = jsob;
    }
    data: T;
    links?: {self: string};
}
