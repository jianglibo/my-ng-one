import { CommonDataSource } from '../../services/common-datasource';
import { ManufacturerAttributes } from '../../dto/manufacturer-attributes';
import { Manufacturer } from '../../dto/manufacturer';
import { HttpDatastoreService } from '../../http-datastore.service';
import { MatSort, MatPaginator } from '@angular/material';

export class ManufacturerDatasource extends CommonDataSource<ManufacturerAttributes, Manufacturer> {
    constructor(_dataStore: HttpDatastoreService,
        _type: Manufacturer,
        _paginator: MatPaginator,
        _sort: MatSort) {
            super(_dataStore, Manufacturer, _paginator, _sort);
    }
}
