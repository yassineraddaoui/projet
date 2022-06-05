import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthLogin } from '../model/AuthLogin';
import { AuthSignUp } from '../model/AuthSignUp';
const AUTH_API = 'http://localhost:8080/admin/auth/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    observe: "response" as 'body', // to display the full response & as 'body' for type cast
    responseType: "json"
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(credentials :AuthLogin): Observable<any> {
    return this.http.post(AUTH_API + 'signin/candidat', {
      cin: credentials.cin,
      password: credentials.password,
      delegation:credentials.delegation
    }, httpOptions);
  }
  register(user:AuthSignUp): Observable<any> {
    return this.http.post<string>(AUTH_API + 'signup/candidat', {
      cin: user.cin,
      password: user.password,
      delegation: user.delegation,
    }, httpOptions);
  }
  

}
