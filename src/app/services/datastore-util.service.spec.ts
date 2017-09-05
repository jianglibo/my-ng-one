import { TestBed, inject } from '@angular/core/testing';

import { DatastoreUtilService } from './datastore-util.service';

describe('DatastoreUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatastoreUtilService]
    });
  });

  it('should be created', inject([DatastoreUtilService], (service: DatastoreUtilService) => {
    expect(service).toBeTruthy();
  }));
});
