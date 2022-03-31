import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Condidat } from 'src/app/condidat';

@Injectable({
  providedIn: 'root'
})
export class CondidatService {

  private baseUrl ="http://localhost:8080/api/v1/candidat"
  constructor( private httpClient: HttpClient ) { }
  getAll(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}s`);
  }
  addCondidat(condidat:Condidat) :Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,condidat);
  }
  getCandidat(cin :string) :Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${cin}`);
  }
  deleteCandidat(cin :string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${cin}`);
  }
  updateCandidat(cin:string, condidat:Condidat): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${cin}`,condidat);
  }
}
