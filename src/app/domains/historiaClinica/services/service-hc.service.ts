import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {  motivoConsulta } from '@historiaClinica/models/historia.model';
import { antecedente } from '@historiaClinica/models/antecedente.model';
import { examenMental } from '@historiaClinica/models/examenMental.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceHcService {

 
  private urlAPI = 'http://127.0.0.1:8000/API_Historia_Clinica';
 
  constructor (private http: HttpClient) {}
      // http peticiones motivo de consulta 

  obtenerMotivoConsulta(): Observable<any> {
    return this.http.get(`${this.urlAPI}/motivo-consulta`);
  }
  
  public getMethod():Observable<motivoConsulta[]>{
    return this.http.get<motivoConsulta[]>(`${this.urlAPI}`);
  };
  public getdato(id_motivo_consulta: number):Observable<motivoConsulta[]>{
    return this.http.get<motivoConsulta[]>(`${this.urlAPI}/${id_motivo_consulta}`);
  };

  public postMethod( motivoC : motivoConsulta):Observable<any>{
    return this.http.post(`${this.urlAPI}`, motivoC); 
  };

  public putMethod( id_motivo_consulta: number, motivo_consulta: string ,motivoC : motivoConsulta):Observable<any>{
    return this.http.put(`${this.urlAPI}/{id_motivo_consulta}{motivo_consulta}`, motivoC); 
  };

  public patchMethod( id_motivo_consulta: number, motivo_consulta: string ,motivoC : {}):Observable<any>{
    return this.http.patch(`${this.urlAPI}/{id_motivo_consulta}{motivo_consulta}`, motivoC); 
  };

  public deleteMethod( id_motivo_consulta: number, motivo_consulta: string ):Observable<any>{
    return this.http.delete<any>(`${this.urlAPI}/{id_motivo_consulta}{motivo_consulta}`); 
  };



    // http peticiones  de ExamenMental/ 

    obtenerExamenMental(): Observable<any> {
      return this.http.get(`${this.urlAPI}/ExamenMental/`);
    }
    
    public getExamenMental(): Observable<examenMental[]> {
      return this.http.get<examenMental[]>(`${this.urlAPI}/ExamenMental`);
    }

    public postExamenMental( examenMentall : examenMental):Observable<any>{
      return this.http.post(`${this.urlAPI}`, examenMentall); 
    };
  
    public putExamenMental( id_examen_mental: number, examen_mental: string ,examenMentall : examenMental):Observable<any>{
      return this.http.put(`${this.urlAPI}/{id_examen_mental}{motivo_consulta}`, examenMentall); 
    };
  
    public patchExamenMental( id_examen_mental: number, examen_mental: string ,examenMentall : {}):Observable<any>{
      return this.http.patch(`${this.urlAPI}/{id_examen_mental}{motivo_consulta}`, examenMentall); 
    };
  
  
    public deleteExamenMental(id_examen_mental: number): Observable<any> {
      return this.http.delete<any>(`${this.urlAPI}/ExamenMental/${id_examen_mental}`);
    }


}




