import { Injectable } from '@angular/core';
import { JsonApiDatastoreConfig, JsonApiDatastore } from 'angular2-jsonapi';

import {Http} from '@angular/http';
import {User} from './user';

@Injectable()
@JsonApiDatastoreConfig({
  baseUrl: '/jsonapi/',
  models: {
    users: User
  }
})
export class DataStoreService  extends JsonApiDatastore {
  constructor(http: Http) {
      super(http);
   }
}
