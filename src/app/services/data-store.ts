
import { Observable } from 'rxjs/Observable';
import { Pager } from './datastore-util.service';
import { JsonapiObject, AttributesBase } from '../dto/jsonapi-object';
import { ListResponse } from '../dto/list-response';

export interface DtoType<E extends AttributesBase, T extends JsonapiObject<E>> {
    new(datastore: DataStore, data: any): T;
}

export interface DataStore {
    findAll<E extends AttributesBase, T extends JsonapiObject<E>>(dtoType: DtoType<E, T>,
        page: Pager,
        sort: {fname: keyof E, descending: boolean}[],
        filter: {fname: keyof E, value: any}[],
        params?: any): Observable<ListResponse<E, T>>;

    findRecord<E extends AttributesBase, T extends JsonapiObject<E>>(modelType: DtoType<E, T>, id: number, params?: any): Observable<T>;
    createRecord<E extends AttributesBase, T extends JsonapiObject<E>>(modelType: DtoType<E, T>, data?: any): T;
    saveRecord<E extends AttributesBase, T extends JsonapiObject<E>>(attributesMetadata: any, model?: T, params?: any): Observable<T>;
    deleteRecord<E extends AttributesBase, T extends JsonapiObject<E>>(modelType: DtoType<E, T>, id: string): Observable<Response>;
}
