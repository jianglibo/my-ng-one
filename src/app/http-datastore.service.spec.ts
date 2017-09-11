import { TestBed, inject } from '@angular/core/testing';

import { HttpDatastoreService } from './http-datastore.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DatastoreUtilService, Pager } from './services/datastore-util.service';
import { LoginAttempt } from './dto/login-attempt';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/reduce';
import { JsonApiError } from './services/http-datastore-base';
import { HttpErrorResponse } from '@angular/common/http';
import { LOGIN_FAIL_BODY } from './fixtures/loginfailure';
import { USERS_BODY } from './fixtures/usersgetlist';
import { User } from './dto/user';
import { UserAttributes } from './dto/user-attributes';
import { LoginAttemptAttributes } from './dto/login-attempt-attributes';

describe('HttpDatastoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpDatastoreService, DatastoreUtilService]
    });
  });

  it('rxjs of.', () => {
    Observable.of(1, 2, 3).reduce((x, y) => x + y).subscribe(v => expect(v).toBe(6));
    Observable.of('a', 'b', 'c').reduce((x, y) => x + y).subscribe(v => expect(v).toBe('abc'));
    function c() { }
    let o = { c: c };
    expect('c' in o).toBeTruthy();
  });

  it('should handle 4xx response', inject([HttpDatastoreService, HttpTestingController],
    (service: HttpDatastoreService, httpMock: HttpTestingController) => {
      expect(service).toBeTruthy();

      service.findAll(LoginAttempt, LoginAttemptAttributes).subscribe(data => expect(data['name']).toEqual('Test Data'),
        (err: JsonApiError[]) => {
          expect(err.length).toBe(1);
          expect(err[0].code).toBe(LOGIN_FAIL_BODY.errors[0].code);
        });
      const req = httpMock.expectOne('/jsonapi/loginAttempts?page[offset]=0&page[limit]=10');
      req.flush(LOGIN_FAIL_BODY, { status: 400, statusText: 'xxx' });
      httpMock.verify();
    }));

    it('should handle list response', inject([HttpDatastoreService, HttpTestingController],
      (service: HttpDatastoreService, httpMock: HttpTestingController) => {
        service.findAll(User, UserAttributes, null, [{
          fname: 'email',
          descending: true
        }]).subscribe(data => {
          console.log(data);
          expect(data['name']).toEqual('Test Data');
        });
        const req = httpMock.expectOne('/jsonapi/users?page[offset]=0&page[limit]=10');
        req.flush(USERS_BODY, { status: 200 , statusText: 'OK'});
        httpMock.verify();
      }));
});
