import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
//import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({  providedIn: 'root'})
export class JobserviceService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return [
      { id: 1, name: 'Jane', age: 30 },
      { id: 2, name: 'Jim', age: 22 },
      { id: 3, name: 'Kim', age: 23 },
    ];
  }

  getUsers2(): Observable<any> {
    return this.http
      .get('https://reqres.in/api/users', {
        headers: {
          'Content-Type': 'application/json',
          token: '1234',
        },
      })
      .pipe(
        map((res: any) => res.data),
        catchError(() => {
          console.log('handle error in service');
          return throwError(() => new Error('Some api error'));
        })
      );
  }
    
}
