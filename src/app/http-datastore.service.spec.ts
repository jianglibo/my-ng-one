import { TestBed, inject } from '@angular/core/testing';

import { HttpDatastoreService } from './http-datastore.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DatastoreUtilService, Pager } from './services/datastore-util.service';
import { LoginAttempt } from './dto/login-attempt';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/reduce';
import { JsonApiError } from './services/http-datastore-base';
import { HttpErrorResponse } from '@angular/common/http';

const loginErrorBody = {
  'errors' : [ {
    'code' : 'E4001000',
    'title' : 'org.springframework.security.core.AuthenticationException',
    'detail' : 'Bad credentials'
  } ]
};

fdescribe('HttpDatastoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpDatastoreService, DatastoreUtilService]
    });
  });

  it('rxjs of.', () => {
    Observable.of(1, 2, 3).reduce((x, y) => x + y).subscribe(v => expect(v).toBe(6));
    Observable.of('a', 'b', 'c').reduce((x, y) => x + y).subscribe(v => expect(v).toBe('abc'));
    function c() {}
    let o = {c: c};
    expect('c' in o).toBeTruthy();
  });

  it('should be created', inject([HttpDatastoreService, HttpTestingController],
     (service: HttpDatastoreService, httpMock: HttpTestingController) => {
    expect(service).toBeTruthy();
    // service.findAll(LoginAttempt).subscribe(data => expect(data['name']).toEqual('Test Data'), (err: HttpErrorResponse) => {
    //   console.log(err);
    //   let errBody = err.error as {errors: Array<JsonApiError>};
    //   expect([] instanceof Array).toBeTruthy();
    //   expect('length' in [1, 2]).toBeTruthy();
    //   expect(Symbol.iterator in [1, 2]).toBeTruthy();
    //   expect(errBody.errors).toBeTruthy();
    //   expect(errBody.errors.length).toBe(1);
    //   expect(errBody.errors[0].code).toBe('E4001000');
    //   expect(typeof errBody.errors).toBe('E4001000');
    //   expect(err.status).toBe(400);
    //   expect(err.statusText).toBe('xxx');
    // });

    service.findAll(LoginAttempt).subscribe(data => expect(data['name']).toEqual('Test Data'), (err: JsonApiError[]) => {
      console.log(err);
      // let errBody = err.error as {errors: Array<JsonApiError>};
      // expect([] instanceof Array).toBeTruthy();
      // expect('length' in [1, 2]).toBeTruthy();
      // expect(Symbol.iterator in [1, 2]).toBeTruthy();
      // expect(errBody.errors).toBeTruthy();
      // expect(errBody.errors.length).toBe(1);
      // expect(errBody.errors[0].code).toBe('E4001000');
      // expect(typeof errBody.errors).toBe('E4001000');
      // expect(err.status).toBe(400);
      // expect(err.statusText).toBe('xxx');
    });
    const req = httpMock.expectOne('/jsonapi/loginAttempts?page[offset]=0&page[limit]=10');
    req.flush(loginErrorBody, {status: 400, statusText: 'xxx'});
    httpMock.verify();
  }));
});
