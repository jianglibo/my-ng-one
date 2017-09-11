import { TestBed, inject } from '@angular/core/testing';

import { DatastoreUtilService } from './datastore-util.service';
import { LoginAttempt } from '../dto/login-attempt';

describe('DatastoreUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatastoreUtilService]
    });
  });

  it('should get right list url.', inject([DatastoreUtilService], (service: DatastoreUtilService) => {
    const url = service.getListUrl(LoginAttempt, undefined, null, null, '/jsonapi/');
    expect(url).toBe('/jsonapi/loginAttempts');
  }));

  it('should get right url with page.', inject([DatastoreUtilService], (service: DatastoreUtilService) => {
    let url = service.getListUrl(LoginAttempt, {offset: 0, limit: 20} , null, null, '/jsonapi/');
    expect(url).toBe('/jsonapi/loginAttempts?page[offset]=0&page[limit]=20');

    url = service.getListUrl(LoginAttempt, {number: 0, size: 20} , null, null, '/jsonapi/');
    expect(url).toBe('/jsonapi/loginAttempts?page[number]=0&page[size]=20');

    url = service.getListUrl(LoginAttempt, {cursor: 555} , null, null, '/jsonapi/');
    expect(url).toBe('/jsonapi/loginAttempts?page[cursor]=555');

    url = service.getListUrl(LoginAttempt,
      null ,
      // [{fname: 'username', descending: true}, {fname: 'password', descending: false}],
      [],
      [{fname: 'username', value: 'a'}], '/jsonapi/');
    expect(url).toBe('/jsonapi/loginAttempts?sort=-username,password&filter[username]=a');

  }));

  it('should get right single url.', inject([DatastoreUtilService], (service: DatastoreUtilService) => {
    const url = service.getSingleUrl(LoginAttempt, 55, '/jsonapi/');
    expect(url).toBe('/jsonapi/loginAttempts/55');
  }));

  it('truthy', () => {
    expect(!!undefined).toBe(false);
    expect(!![]).toBe(true);
    expect(null == undefined).toBe(true);
    let a: any;
    expect(a == null).toBe(true);
    let b = 1 && true;
    expect(b === true).toBe(true);
    expect({}['abc'] === undefined).toBe(true);
    expect({abc: undefined}['abc'] === undefined).toBe(true);
    expect({abc: undefined}['abc'] == null).toBe(true);
    expect({abc: null}['abc'] == null).toBe(true);

  });
  it('keyof', () => {
    // tslint:disable-next-line:interface-over-type-literal
    type t = {a: number, b: string};
    // tslint:disable-next-line:prefer-const
    let ko: keyof LoginAttempt;
  });
  it('number switch', () => {
    let key: number;
    let v: string;
    key = 1;
    switch (key) {
      case 0:
        v = '0';
        break;
      case 1:
        v = '1';
        break;
      default:
        break;
    }
    expect(v).toBe('1');
  });
});
