import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthAddAdmin } from '../model/AuthAddAdmin';
import { AuthLoginAdmin } from '../model/AuthLoginAdmin';
const AUTH_API = 'http://localhost:8080/api/admin/auth/';
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
export class AuthAdminService {

  constructor(private http: HttpClient) { }
loginAdmin(credentials :AuthLoginAdmin): Observable<any> {
  return this.http.post(AUTH_API + 'signin', {
    matricule: credentials.mat,
    password: credentials.password,
  }, httpOptions);
}
addAdmin(user:AuthAddAdmin): Observable<any> {
  return this.http.post<string>(AUTH_API + 'addadmin', {
    matricule: user.mat,
    password: user.password,
    role:[user.role]
  }, httpOptions);
}
}
