import { Injectable } from '@angular/core';
import { DataStore, DtoType } from './data-store';
import { BaseDto } from '../dto/base-dto';
import { Observable } from 'rxjs/Observable';
import { ListResult } from './list-result';
import { HttpClient } from '@angular/common/http';
import { DatastoreUtilService, Pager } from './datastore-util.service';

export class HttpDatastoreBase implements DataStore {

  constructor(private http: HttpClient,
    private dutil: DatastoreUtilService,
    private baseUrl: string,
    private pageSize = 10) { }

  findAll<T extends BaseDto>(dtoType: DtoType<T>,
    page?: Pager,
    sort?: {fname: keyof T, descending: boolean}[],
    filter?: {fname: keyof T, value: any}[],
    params?: any): Observable<ListResult<T>> {
    this.http.get(this.dutil.getListUrl(dtoType, null, null, null, '/jsonapi'), {observe: 'response'}).subscribe(resp => {
      // Here, resp is of type HttpResponse<MyJsonData>.
      // You can inspect its headers:
      console.log(resp.headers.get('X-Custom-Header'));
      // And access the body directly, which is typed as MyJsonData as requested.
      // console.log(resp.body.someField);
    });

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
