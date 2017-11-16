import { Injectable } from '@angular/core';
import { ManufacturerDatasource } from './manufacturer-datasource';
import { HttpDatastore } from '../services/http-datastore';

@Injectable()
export class ManufacturerService {

  constructor(private _datastore: HttpDatastore) {
  }

   getDatasource(): ManufacturerDatasource {
     return new ManufacturerDatasource(this._datastore);
   }
}
