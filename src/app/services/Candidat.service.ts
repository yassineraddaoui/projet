import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from '../model/Candidat';

@Injectable({
  providedIn: 'root'
})
export class CondidatService {

  private baseUrl ="http://localhost:8080/api/v1/candidat"
  constructor( private httpClient: HttpClient ) { }
  getAll(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}s`);
  }
  addCandidat(candidat:Candidat) :Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}s`,candidat);
  }
  getCandidat(cin :string) :Observable<Candidat>{
    return this.httpClient.get<Candidat>(`${this.baseUrl}/${cin}`);
  }
  deleteCandidat(cin :string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${cin}`);
  }
  updateCandidat(cin:string, candidat:Candidat): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${cin}`,candidat);
  }
}
