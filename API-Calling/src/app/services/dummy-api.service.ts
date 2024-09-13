import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DummyApiService {
  constructor(private http: HttpClient) {}

  getDummyData(username:any): Observable<any> {
    const url = `https://api.github.com/users/${username}`;
    //use .pipe() for multiple combination of operation
    return this.http.get<any>(url).pipe(
       //this function is executed if there is error 
      catchError(this.handleError)
    );

  }

  //function for handling error in Angular
  private handleError(error:HttpErrorResponse):Observable<any> {
    alert("resource not found")
    return throwError(error.message);
  }
}
