import { CommonDataSource } from '../services/common-datasource';
import { HttpDatastoreService } from '../services/http-datastore.service';
import { MatSort, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { ManufacturerAttributes, Manufacturer, DataStore } from 'data-shape';

export class ManufacturerDatasource extends CommonDataSource<ManufacturerAttributes, Manufacturer> {

    constructor(_dataStore: DataStore) {
            super(_dataStore, Manufacturer);
    }
}
