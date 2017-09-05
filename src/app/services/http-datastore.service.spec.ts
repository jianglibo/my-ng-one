import { TestBed, inject } from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpErrorResponse } from '@angular/common/http';
import { HttpDatastoreService } from './http-datastore.service';
import { LoginAttempt } from '../dto/login-attempt';

describe('HttpDatastoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpDatastoreService]
    });
  });

  it('should be created', inject([HttpDatastoreService], (service: HttpDatastoreService) => {
    expect(service).toBeTruthy();
    service.findAll(LoginAttempt, {}).subscribe(data => expect(data['name']).toEqual('Test Data'), err => {
      console.log(err);
    });
  }));
});
