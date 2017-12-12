import { TestBed, inject } from "@angular/core/testing";

import { ManufacturerService } from "./manufacturer.service";
import {
  PageCursor,
  PageOffsetLimit,
  PageNumberSize,
  isPageOffsetLimit,
  Manufacturer,
  SortPhrase,
  FilterPhrase,
  ListBody,
  ManufacturerAttributes,
  MANUFACTURERS_BODY
} from "data-shape";
import { Observable } from "rxjs/Observable";
import { HttpDatastore } from "../services/http-datastore";

class HttpDatastoreServiceStub {
  findAll(
    jsonapiObjectType: Manufacturer,
    page: PageCursor | PageOffsetLimit | PageNumberSize,
    sort: SortPhrase[],
    filter: FilterPhrase[],
    params?: any
  ): Observable<ListBody<ManufacturerAttributes, Manufacturer>> {
    let lb = MANUFACTURERS_BODY as ListBody<
      ManufacturerAttributes,
      Manufacturer
    >;
    console.log(page);
    if (isPageOffsetLimit(page)) {
      lb.data = lb.data.slice(page.offset, page.limit + page.offset);
    }
    return Observable.of(lb);
  }
}

let httpDatastoreServiceStub = new HttpDatastoreServiceStub();

describe("ManufacturerService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ManufacturerService,
        { provide: HttpDatastore, useValue: httpDatastoreServiceStub }
      ]
    });
  });

  it(
    "should be created",
    inject([ManufacturerService], (service: ManufacturerService) => {
      expect(service).toBeTruthy();
    })
  );
});
