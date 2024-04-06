import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Profesional } from '../models/profesional.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {
  private http = inject(HttpClient)

  constructor() { }

  getprofesionales(){
    return this.http.get<Profesional[]>('');
  }
}
