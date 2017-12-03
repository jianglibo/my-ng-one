import { HttpResponse } from '@angular/common/http';

const loginErrorBody = {
    'errors' : [ {
      'code' : 'E4001000',
      'title' : 'org.springframework.security.core.AuthenticationException',
      'detail' : 'Bad credentials'
    } ]
  };


export function loginResponse() {
    let r = new HttpResponse({body: {a: 1}, status: 400});

}
