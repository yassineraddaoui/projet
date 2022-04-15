import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Handicap } from 'src/app/handicap';

@Injectable({
  providedIn: 'root'
})
export class HandicapService {

private baseUrl ="http://localhost:8080/api/v1/candidat"

constructor( private httpClient: HttpClient ) { }
getAll(): Observable<any> {
  return this.httpClient.get(`${this.baseUrl}s`);
}
addCondidat(handicap:Handicap) :Observable<Object>{
  return this.httpClient.post(`${this.baseUrl}s`,handicap);
}
getListHandicapByCin(cin :string) :Observable<Array<Handicap>>{
  return this.httpClient.get<Array<Handicap>>(`${this.baseUrl}/${cin}/handicaps`);
}
deleteCandidat(cin :string): Observable<any> {
  return this.httpClient.delete(`${this.baseUrl}/${cin}`);
}
updateCandidat(cin:string, handicap:Handicap): Observable<any> {
  return this.httpClient.put(`${this.baseUrl}/${cin}`,handicap);
}
}
