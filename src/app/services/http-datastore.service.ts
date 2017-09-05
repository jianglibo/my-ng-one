import { Injectable } from '@angular/core';
import { DataStore, DtoType } from './data-store';
import { BaseDto } from '../dto/base-dto';
import { Observable } from 'rxjs/Observable';
import { ListResult } from './list-result';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpDatastoreService implements DataStore {

  constructor(private http: HttpClient) { }

  findAll<T extends BaseDto>(dtoType: DtoType<T>, params?: any): Observable<ListResult<T>> {
    const e = new Error('Method not implemented.');
    throw e;
  }
  findRecord<T extends BaseDto>(modelType: DtoType<T>, id: number, params?: any): Observable<T> {
    throw new Error('Method not implemented.');
  }
  createRecord<T extends BaseDto>(modelType: DtoType<T>, data?: any): T {
    throw new Error('Method not implemented.');
  }
  saveRecord<T extends BaseDto>(attributesMetadata: any, model?: T, params?: any): Observable<T> {
    throw new Error('Method not implemented.');
  }
  deleteRecord<T extends BaseDto>(modelType: DtoType<T>, id: string): Observable<Response> {
    throw new Error('Method not implemented.');
  }

}
