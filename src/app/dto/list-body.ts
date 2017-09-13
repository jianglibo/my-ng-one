import { JsonapiObject, AttributesBase } from './jsonapi-object';

export class ListBody<E extends AttributesBase, T extends JsonapiObject<E>> {
    data: T[];
    links: {first: string, last: string, prev: string, next: string};
    meta: {totalResourceCount: number};
}
