import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataSource } from '@angular/cdk/collections';
import { JsonapiObject, AttributesBase } from '../dto/jsonapi-object';
import { Observable } from 'rxjs/Observable';
import { MatSort, MatPaginator } from '@angular/material';
import { HttpDatastoreService } from '../http-datastore.service';
import { JsonapiObjectType } from './data-store';
import 'rxjs/add/operator/switchMap';
 /**
   * Data source to provide what data should be rendered in the table. Note that the data source
   * can retrieve its data in any way. In this case, the data source is provided a reference
   * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
   * the underlying data. Instead, it only needs to take the data and send the table exactly what
   * should be rendered.
   */
  export abstract class CommonDataSource<A extends AttributesBase, J extends JsonapiObject<A>> extends DataSource<J> {
    _filterChange = new BehaviorSubject('');
    get filter(): string { return this._filterChange.value; }
    set filter(filter: string) { this._filterChange.next(filter); }

    filteredData: J[] = [];
    renderedData: J[] = [];

    constructor(private _dataStore: HttpDatastoreService,
                private _type: JsonapiObjectType<A, J>,
                private _paginator: MatPaginator,
                private _sort: MatSort) {
      super();

      // Reset to the first page when the user changes the filter.
      this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<J[]> {
      // Listen for any changes in the base data, sorting, filtering, or pagination
      const displayDataChanges = [
        this._sort.sortChange,
        this._filterChange,
        this._paginator.page,
      ];

      return Observable.merge(...displayDataChanges)
        .startWith(null)
        .switchMap(() => {
              return this._dataStore.findAll(this._type);
          }
        ).map(listBody => {
          return listBody.data;
      });
    //   .map(() => {
    //     // Filter data
    //     // this.filteredData =;
    //     this._dataStore.findAll(this._type).subscribe
    //     // .filter((item: J) => {
    //     //   let searchStr = (item.name + item.color).toLowerCase();
    //     //   return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
    //     // });

    //     // Sort filtered data
    //     const sortedData = this.sortData(this.filteredData.slice());

    //     // Grab the page's slice of the filtered sorted data.
    //     const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
    //     this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
    //     return this.renderedData;
    //   });
    }

    disconnect() {}

    // /** Returns a sorted copy of the database data. */
    // sortData(data: J[]): J[] {
    //   if (!this._sort.active || this._sort.direction === '') { return data; }

    //   return data.sort((a, b) => {
    //     let propertyA: number|string = '';
    //     let propertyB: number|string = '';

    //     switch (this._sort.active) {
    //       case 'userId': [propertyA, propertyB] = [a.id, b.id]; break;
    //       case 'userName': [propertyA, propertyB] = [a.name, b.name]; break;
    //       case 'progress': [propertyA, propertyB] = [a.progress, b.progress]; break;
    //       case 'color': [propertyA, propertyB] = [a.color, b.color]; break;
    //     }

    //     let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
    //     let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

    //     return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    //   });
    // }
  }
