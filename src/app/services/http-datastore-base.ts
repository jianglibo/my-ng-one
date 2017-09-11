import { Injectable } from '@angular/core';
import { DataStore, DtoType } from './data-store';
import { BaseDto } from '../dto/base-dto';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DatastoreUtilService, Pager } from './datastore-util.service';
import { ListResult } from '../dto/list-result';
import { ListResponse } from '../dto/list-response';
import { JsonapiObject, AttributesBase } from '../dto/jsonapi-object';

export interface JsonApiError {
  code: string;
  title: string;
  detail: string;
}

// function

export class HttpDatastoreBase implements DataStore {

  constructor(private http: HttpClient,
    private dutil: DatastoreUtilService,
    private baseUrl: string,
    private defaultPager: Pager = {offset: 0, limit: 10}) {}

  findAll<E extends AttributesBase, T extends JsonapiObject<E>>(dtoType: DtoType<E, T>,
    page?: Pager,
    sort?: {fname: keyof E, descending: boolean}[],
    filter?: {fname: keyof E, value: any}[],
    params?: any): Observable<ListResponse<E, T>> {
      if (page == null) {
        page = this.defaultPager;
      }
      let url = this.dutil.getListUrl(dtoType, page, sort, filter, this.baseUrl);
      console.log(url);
      return this.http.get<ListResponse<E, T>>(url, {observe: 'response'}).map(resp => {
        let r = resp.body;
        return r;
      }).catch((err: HttpErrorResponse) => {
        // err.
        if (err.error && err.error.errors && err.error.errors instanceof Array) {
          return Observable.throw(err.error.errors as JsonApiError[]);
        }
        return Observable.throw(err);
      });
    // .subscribe(resp => {
    //   // Here, resp is of type HttpResponse<MyJsonData>.
    //   // You can inspect its headers:
    //   console.log(resp.headers.get('X-Custom-Header'));
    //   // And access the body directly, which is typed as MyJsonData as requested.
    //   console.log(resp.body.length);
    // });

    // const e = new Error('Method not implemented.');
    // throw e;
  }
  findRecord<E extends AttributesBase, T extends JsonapiObject<E>>(modelType: DtoType<E, T>, id: number, params?: any): Observable<T> {
    throw new Error('Method not implemented.');
  }
  createRecord<E extends AttributesBase, T extends JsonapiObject<E>>(modelType: DtoType<E, T>, data?: any): T {
    throw new Error('Method not implemented.');
  }
  saveRecord<E extends AttributesBase, T extends JsonapiObject<E>>(attributesMetadata: any, model?: T, params?: any): Observable<T> {
    throw new Error('Method not implemented.');
  }
  deleteRecord<E extends AttributesBase, T extends JsonapiObject<E>>(modelType: DtoType<E, T>, id: string): Observable<Response> {
    throw new Error('Method not implemented.');
  }

}
