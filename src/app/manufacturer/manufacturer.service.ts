import { Injectable } from '@angular/core';
import { ManufacturerDatasource } from './manufacturer-datasource';
import { HttpDatastore } from '../services/http-datastore';
import { Manufacturer } from '../dto/manufacturer';
import { Observable } from 'rxjs/Observable';
import { SingleBody } from '../dto/single-body';
import { ManufacturerAttributes } from '../dto/manufacturer-attributes';

@Injectable()
export class ManufacturerService {

  constructor(private _datastore: HttpDatastore) {
  }

   getDatasource(): ManufacturerDatasource {
     return new ManufacturerDatasource(this._datastore);
   }

   save(manufacturer: Manufacturer): Observable<SingleBody<ManufacturerAttributes, Manufacturer>> {
    return this._datastore.saveRecord(manufacturer);
   }
}
