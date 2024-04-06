
import { Component, OnInit, inject, signal,  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LayoutComponent } from '@shared/components/layout/layout.component';
import { RouterLinkWithHref } from '@angular/router';
import {  motivoConsulta } from '@historiaClinica/models/historia.model';
import { examenMental } from '@historiaClinica/models/examenMental.model';
import { ServiceHcService } from '@historiaClinica/services/service-hc.service';
import { response } from 'express';


@Component({
  selector: 'app-historia-clinica',
  standalone: true,
  imports: [FontAwesomeModule,  LayoutComponent, RouterLinkWithHref, CommonModule,   ],
  templateUrl: './historia-clinica.component.html',
  styleUrl: './historia-clinica.component.css'
})
export class HistoriaClinicaComponent  implements OnInit{
  guardarCambios() {
    // Obtener el valor del campo de texto (supongamos que está en una variable llamada 'examenMentalTexto')
    const examenMentalTexto = this.examenMentall[0].examen_mental; // Por ejemplo, toma el primer elemento
  
    // Lógica para enviar 'examenMentalTexto' al servidor o actualizar localmente
    // Por ahora, solo mostraremos un mensaje en la consola
    console.log('Cambios guardados:', examenMentalTexto);
  }
  

  // http peticiones motivo de consulta 
  motivoC : motivoConsulta[] = [];

    // http peticiones Examen mental
    examenMentall : examenMental[] = [];


  constructor(private ServiceHcService: ServiceHcService ){}

  ngOnInit(): void {
    // this.getMethod();
    // this.getdato(1);


  }
  getMethod(){
    this.ServiceHcService.getMethod().subscribe({
      next: (response) => {
        console.log(response);
        this.motivoC = response;
      },
    });
  }
  getdato(id_motivo_consulta:number){
    this.ServiceHcService.getdato(id_motivo_consulta).subscribe({
      next: (response) => {
        console.log(response);
        this.motivoC = response;
      },
    });
  }
  postMethod(motivoC : motivoConsulta){
    this.ServiceHcService.postMethod(motivoC  ).subscribe({
      next: (response) => {
        console.log(response);
       
        
      },
    });
  }
  putMethod( id_motivo_consulta: number, motivo_consulta: string ,motivoC : motivoConsulta){
    this.ServiceHcService.putMethod(id_motivo_consulta, motivo_consulta ,motivoC ).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
  patchMethod( id_motivo_consulta: number, motivo_consulta: string ,motivoC : {}){
    this.ServiceHcService.patchMethod(id_motivo_consulta, motivo_consulta ,motivoC ).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
  deleteMethod( id_motivo_consulta: number, motivo_consulta: string ){
    this.ServiceHcService.deleteMethod(id_motivo_consulta, motivo_consulta ).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
// componente de Examen Mental
  getExamenMental(){
    this.ServiceHcService.getExamenMental().subscribe({
      next: (response) => {
        console.log(response);
        this.examenMentall = response;
      },
    });
  }

  postExamenMental(examenMentall : examenMental){
    this.ServiceHcService.postExamenMental(examenMentall  ).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
  putExamenMental( id_examen_mental: number,  examen_mental: string ,examenMentall : examenMental){
    this.ServiceHcService.putExamenMental(id_examen_mental,  examen_mental ,examenMentall ).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
  patchExamenMental( id_examen_mental: number,  examen_mental: string ,examenMentall : {}){
    this.ServiceHcService.patchExamenMental(id_examen_mental,  examen_mental ,examenMentall ).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
  deleteExamenMental(id_examen_mental: number) {
    this.ServiceHcService.deleteExamenMental(id_examen_mental).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
  

}
