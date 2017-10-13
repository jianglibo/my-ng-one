import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { User } from './dto/user';

@Component({
  selector: 'app-root',
  templateUrl: './my-ng-first-app.html',
  styleUrls: ['./my-ng-first-app.css']
})
export class MyNgFirstAppComponent implements OnInit {
  title = 'My First Angular App';
  // heroes = ['Windstorm', 'Bombasto', 'Magneta', '苏东坡'];
  // constructor() {}
  ngOnInit(): void {
    // this.datastore.query(User, {page: {offset: 0, limit: 1}}).subscribe(
    //   (users: User[]) => console.log(users),
    //   (errorResponse) => {
    //     if (errorResponse instanceof ErrorResponse) {
    //           // do something with errorResponse
    //           console.log(errorResponse.errors);
    //     }
    //   }
    // );
    // this.http.get('/jsonapi/users', {observe: 'response'}).subscribe(data => {
    //   // Read the result field from the JSON response.
    //   console.log(data);
    // });
  }
}
