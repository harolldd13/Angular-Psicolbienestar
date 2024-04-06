import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { profesionales } from '@profesionales/models/profesionales.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProfesionalesService {


  private urlAPI = 'http://127.0.0.1:8000/API_Usuario/Persona/';
 
  constructor (private http: HttpClient) {}
      // http peticiones motivo de consulta 


  public getProfesionales():Observable<profesionales[]>{
    return this.http.get<profesionales[]>(`${this.urlAPI}`);
  };


  public postProfesionales( profesionalApi : profesionales):Observable<any>{
    return this.http.post(`${this.urlAPI}`, profesionalApi); 
  };

  public putProfesionales(  id_persona: number,  nombre1: string, nombre2: string, apellido1: string, apellido2: string,correo: string, imagen: string, profesion: string, profesionalApi  : profesionales):Observable<any>{
    return this.http.put(`${this.urlAPI}/{ id_persona}{ nombre1}{ nombre2}{ apellido1}{ apellido2}{ correo}{ imagen}{ profesion}`, profesionalApi); 
  };

  public patchProfesionales(  id_persona: number,  nombre1: string, nombre2: string, apellido1: string, apellido2: string,correo: string, imagen: string, profesion: string, profesionalApi : {}):Observable<any>{
    return this.http.patch(`${this.urlAPI}/{ id_persona}{ nombre1}{ nombre2}{ apellido1}{ apellido2}{ correo}{ imagen}{ profesion}`, profesionalApi); 
  };



  public deleteProfesionales(id_persona: number): Observable<any> {
    return this.http.delete<any>(`${this.urlAPI}/${id_persona}`);
  }

  


}




