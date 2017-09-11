import { JsonapiObject } from './jsonapi-object';

export class ListResponse {
    data: JsonapiObject[];
    links: {first: string, last: string, prev: string, next: string};
    meta: {totalResourceCount: number};
}