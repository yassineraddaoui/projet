import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  return this.httpClient.get(`${this.baseUrl}/exportcandidats`
  ,{
    responseType: 'blob'
  });
}
getAll(): Observable<any> {
  return this.httpClient.get(`${this.baseUrl}/candidats`)
}

}
