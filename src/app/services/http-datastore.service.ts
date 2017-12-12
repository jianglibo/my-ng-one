import { Injectable } from '@angular/core';
import { HttpDatastore } from './http-datastore';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpDatastoreService extends HttpDatastore {

  constructor(http: HttpClient) {
    super(http, '/jsonapi', undefined);
  }

}
