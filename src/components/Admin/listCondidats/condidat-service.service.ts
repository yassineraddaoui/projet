import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Condidat } from '../../../app/condidat';

@Injectable({
  providedIn: 'root'
})
export class CondidatServiceService {
  private baseUrl ="http://localhost:8080/api/v1/candidats"
  constructor( private httpClient: HttpClient ) { }
  
  getCondidatsList() :Observable<Condidat[]>{
    return this.httpClient.get<Condidat[]>(`${this.baseUrl}`);
  }
}
