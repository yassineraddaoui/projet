import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';
import { AuthAddAdmin } from '../model/AuthAddAdmin';
import { Candidat } from '../model/Candidat';
import { Specialite } from '../model/specialite';

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
getNotifications(): Observable<Array<any>> {
  return this.httpClient.get<Array<any>>(`${this.baseUrl}/notification`)
}
deleteAdmin(mat :string): Observable<any> {
  return this.httpClient.delete(`${this.baseUrl}/${mat}`);
}

addAdmin(matricule:string,password:string,rolesAdd:string[]) :Observable<Object>{
  return this.httpClient.post(`${this.baseUrl}/addadmin`,new AuthAddAdmin(matricule,password,rolesAdd));
}
getAllAdmins():Observable<Array<any>> {
  return this.httpClient.get<Array<any>>(`${this.baseUrl}/list`)
}

modifierRole(roles: string,matricule:string):Observable<any>{
return this.httpClient.get(`${this.baseUrl}/modifier/${matricule}/${roles}`);
}
getAllSp(): Observable<Array<any>> {
  return this.httpClient.get<Array<any>>(`${this.baseUrl}/specialite`)
}
modifierSpécialité(sp:Specialite,id:any):Observable<any>{
  return this.httpClient.put(`${this.baseUrl}/specialite/modifier/${id}`,sp);
}
addSpécialité(sp:Specialite):Observable<any>{
  return this.httpClient.post(`${this.baseUrl}/specialite/add/`,sp);
}
deleteSp(id:string):Observable<any>{
  return this.httpClient.delete(`${this.baseUrl}/specialite/delete/${id}`);
}


}
