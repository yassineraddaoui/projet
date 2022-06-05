import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from '../model/Candidat';

@Injectable({
  providedIn: 'root'
})

export class CandidatService {

  private baseUrl ="http://localhost:8080/api/v1/candidat"
  constructor( private httpClient: HttpClient ) { }
  choisirSpecialite(bx: string[],cin:string) {
    return this.httpClient.post(`${this.baseUrl}/specialite/${cin}`,bx);
  }


  addCandidat(candidat:Candidat) :Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}s`,candidat);
  }
  getCandidat(cin :string) :Observable<Candidat>{
    return this.httpClient.get<Candidat>(`${this.baseUrl}/${cin}`);
  }
  getListSpécialité(cin:string) :Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/specialite/${cin}`);
  }

  updateCandidat(cin:string, candidat:Candidat): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${cin}`,candidat);
  }
  pdfDownload(cin:string): Observable<Blob> {
    return this.httpClient.get(`${this.baseUrl}pdf/${cin}`, {
      responseType: 'blob'
    });
  }
}
