import { TestBed, inject } from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpErrorResponse } from '@angular/common/http';
import { LoginAttempt } from '../dto/login-attempt';
import { HttpDatastoreBase } from './http-datastore-base';

describe('HttpDatastoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpDatastoreBase]
    });
  });

  it('should be created', inject([HttpDatastoreBase], (service: HttpDatastoreBase) => {
    expect(service).toBeTruthy();
    service.findAll(LoginAttempt).subscribe(data => expect(data['name']).toEqual('Test Data'), err => {
      console.log(err);
    });
  }));
});
