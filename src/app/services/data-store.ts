
import { Observable } from 'rxjs/Observable';
import { Pager } from './datastore-util.service';
import { JsonapiObject, AttributesBase, AttributeType } from '../dto/jsonapi-object';
import { ListResponse } from '../dto/list-response';

export interface JsonapiObjectType<E extends AttributesBase, T extends JsonapiObject<E>> {
    new(datastore: DataStore, data: any): T;
}

export interface SortPhrase {
    fname: string;
    descending: boolean;
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
        params?: any): Observable<ListResponse<E, T>>;

    findRecord<E extends AttributesBase, T extends JsonapiObject<E>>(
        modelType: JsonapiObjectType<E, T>, id: number, params?: any): Observable<T>;

    createRecord<E extends AttributesBase, T extends JsonapiObject<E>>(modelType: JsonapiObjectType<E, T>, data?: any): T;
    saveRecord<E extends AttributesBase, T extends JsonapiObject<E>>(attributesMetadata: any, model?: T, params?: any): Observable<T>;
    deleteRecord<E extends AttributesBase, T extends JsonapiObject<E>>(
        modelType: JsonapiObjectType<E, T>, id: string): Observable<Response>;
}
