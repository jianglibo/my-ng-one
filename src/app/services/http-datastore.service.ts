import { Injectable } from '@angular/core';
import { HttpDatastore } from './http-datastore';
import { HttpClient } from '@angular/common/http';
import { DatastoreUtilService } from './datastore-util.service';

@Injectable()
export class HttpDatastoreService extends HttpDatastore {

  constructor(http: HttpClient, dutil: DatastoreUtilService) {
    super(http, dutil, '/jsonapi', undefined);
  }

}
