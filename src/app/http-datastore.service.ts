import { Injectable } from '@angular/core';
import { HttpDatastoreBase } from './services/http-datastore-base';
import { HttpClient } from '@angular/common/http';
import { DatastoreUtilService } from './services/datastore-util.service';

@Injectable()
export class HttpDatastoreService extends HttpDatastoreBase {

  constructor(http: HttpClient, dutil: DatastoreUtilService) {
    super(http, dutil, '/jsonapi', undefined);
  }

}
