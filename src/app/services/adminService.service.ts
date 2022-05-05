import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';
import { Candidat } from '../model/Candidat';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl ="http://localhost:8080/admin"
  constructor( private httpClient: HttpClient ) { }

pdfDownload(cin:string): Observable<Blob> {
  return this.httpClient.get(`${this.baseUrl}/exportcandidat/${cin}`, {
    responseType: 'blob'
  });
}
getAllPDF(): Observable<Blob> {
  return this.httpClient.get(`${this.baseUrl}/moderator/exportcandidats`
  ,{
    responseType: 'blob'
  });
}
getAll(): Observable<Array<Candidat>> {
  return this.httpClient.get<Array<Candidat>>(`${this.baseUrl}/moderator/candidats`)
}
deleteAdmin(mat :string): Observable<any> {
  return this.httpClient.delete(`${this.baseUrl}/${mat}`);
}
addAdmin(admin:Admin) :Observable<Object>{
  return this.httpClient.post(`${this.baseUrl}`,admin);
}
}
