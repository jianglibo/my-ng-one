import { BaseDto } from '../dto/base-dto';
import { ListResult } from './list-result';

import { Observable } from 'rxjs/Observable';

export interface DtoType<T extends BaseDto> {
    new(datastore: DataStore, data: any): T;
}

export interface DataStore {
    findAll<T extends BaseDto>(dtoType: DtoType<T>, params?: any): Observable<ListResult<T>>;
    findRecord<T extends BaseDto>(modelType: DtoType<T>, id: number, params?: any): Observable<T>;
    createRecord<T extends BaseDto>(modelType: DtoType<T>, data?: any): T;
    saveRecord<T extends BaseDto>(attributesMetadata: any, model?: T, params?: any): Observable<T>;
    deleteRecord<T extends BaseDto>(modelType: DtoType<T>, id: string): Observable<Response>;
}
