import { TestBed, inject } from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';

let hc: HttpClient;

const loginErrorBody = {
    'errors' : [ {
      'code' : 'E4001000',
      'title' : 'org.springframework.security.core.AuthenticationException',
      'detail' : 'Bad credentials'
    } ]
  };

describe('httpClient usage.', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: []
    });
    hc = TestBed.get(HttpClient);
  });

  it('loginAttempt request', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
    http.get('/jsonapi/loginAttempt').subscribe(data => expect(data['name']).toEqual('Test Data'),
    (err: HttpErrorResponse) => {
        console.log('abc');
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
    }
    );
    const req = httpMock.expectOne('/jsonapi/loginAttempt');
    req.flush(loginErrorBody, {status: 400, statusText: 'xxx'});
    httpMock.verify();
  }));

  it('expects a GET request', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
    // Make an HTTP GET request, and expect that it return an object
    // of the form {name: 'Test Data'}.
    http
      .get('/data')
      .subscribe(data => expect(data['name']).toEqual('Test Data'));

    // At this point, the request is pending, and no response has been
    // sent. The next step is to expect that the request happened.
    const req = httpMock.expectOne('/data');

    // If no request with that URL was made, or if multiple requests match,
    // expectOne() would throw. However this test makes only one request to
    // this URL, so it will match and return a mock request. The mock request
    // can be used to deliver a response or make assertions against the
    // request. In this case, the test asserts that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Next, fulfill the request by transmitting a response.
    req.flush({name: 'Test Data'});

    // Finally, assert that there are no outstanding requests.
    httpMock.verify();
    }));
});
