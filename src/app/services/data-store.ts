
import { Observable } from 'rxjs/Observable';
import { Pager } from './datastore-util.service';
import { JsonapiObject, AttributesBase, AttributeType } from '../dto/jsonapi-object';
import { ListResponse } from '../dto/list-response';

export interface JsonapiObjectType<E extends AttributesBase, T extends JsonapiObject<E>> {
    new(datastore: DataStore, data: any): T;
}

export interface SortPhrase<T> {
    fname: T;
    descending: boolean;
}

export interface FilterPhrase<T> {
    fname: T;
    value: any;
}

export interface DataStore {
    findAll<E extends AttributesBase, T extends JsonapiObject<E>, K extends keyof E>(jsonapiObjectType: JsonapiObjectType<E, T>,
        attributeType: AttributeType<E>,
        page: Pager,
        sort: SortPhrase<K>[],
        filter: FilterPhrase<K>[],
        params?: any): Observable<ListResponse<E, T>>;

    findRecord<E extends AttributesBase, T extends JsonapiObject<E>>(
        modelType: JsonapiObjectType<E, T>, id: number, params?: any): Observable<T>;

    createRecord<E extends AttributesBase, T extends JsonapiObject<E>>(modelType: JsonapiObjectType<E, T>, data?: any): T;
    saveRecord<E extends AttributesBase, T extends JsonapiObject<E>>(attributesMetadata: any, model?: T, params?: any): Observable<T>;
    deleteRecord<E extends AttributesBase, T extends JsonapiObject<E>>(
        modelType: JsonapiObjectType<E, T>, id: string): Observable<Response>;
}
