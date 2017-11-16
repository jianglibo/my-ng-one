import { CommonDataSource } from '../services/common-datasource';
import { ManufacturerAttributes } from '../dto/manufacturer-attributes';
import { Manufacturer } from '../dto/manufacturer';
import { HttpDatastoreService } from '../services/http-datastore.service';
import { MatSort, MatPaginator } from '@angular/material';
import { ListBody } from '../dto/list-body';
import { Observable } from 'rxjs/Observable';
import { DataStore } from '../services/data-store';

export class ManufacturerDatasource extends CommonDataSource<ManufacturerAttributes, Manufacturer> {

    constructor(_dataStore: DataStore) {
            super(_dataStore, Manufacturer);
    }
}
