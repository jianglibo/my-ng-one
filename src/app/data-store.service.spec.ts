import { TestBed, inject } from '@angular/core/testing';

import {HttpModule, Http, ConnectionBackend} from '@angular/http';
import { DataStoreService } from './data-store.service';
import {MockBackend, MockConnection} from '@angular/http/testing';

describe('DataStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [DataStoreService, Http, {provide: ConnectionBackend, useClass: MockBackend}]
    });
  });

  it('should be created', inject([DataStoreService], (service: DataStoreService) => {
    expect(service).toBeTruthy();
  }));
});
