
import { Observable } from 'rxjs/Observable';
import { Pager } from './datastore-util.service';
import { JsonapiObject, AttributesBase, AttributeType } from '../dto/jsonapi-object';
import { ListBody } from '../dto/list-body';
import { SingleBody } from '../dto/single-body';

export interface JsonapiObjectType<E extends AttributesBase, T extends JsonapiObject<E>> {
    new(attr: E): T;
}

export type SortWay = 'asc' | 'desc' | '';

export interface SortPhrase {
    fname: string;
    direction: SortWay;
}

export interface FilterPhrase {
    fname: string;
    value: any;
}

export interface DataStore {
    findAll<E extends AttributesBase, T extends JsonapiObject<E>>(jsonapiObjectType: JsonapiObjectType<E, T>,
        page: Pager,
        sort: SortPhrase[],
        filter: FilterPhrase[],
        params?: any): Observable<ListBody<E, T>>;

    findRecord<E extends AttributesBase, T extends JsonapiObject<E>>(
        modelType: JsonapiObjectType<E, T>, id: number | string, params?: any): Observable<SingleBody<E, T>>;

    createRecord<E extends AttributesBase, T extends JsonapiObject<E>>(
        modelType: JsonapiObjectType<E, T>, data: T): Observable<SingleBody<E, T>>;

    saveRecord<E extends AttributesBase, T extends JsonapiObject<E>>(model: T, params?: any): Observable<SingleBody<E, T>>;

    deleteRecord<E extends AttributesBase, T extends JsonapiObject<E>>(model: T): Observable<Response>;
    deleteRecord<E extends AttributesBase, T extends JsonapiObject<E>>(
        jsonapiObjectType: JsonapiObjectType<E, T>, id: string): Observable<Response>;
}
