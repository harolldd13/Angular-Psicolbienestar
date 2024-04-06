import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { RouterLinkWithHref } from '@angular/router';
import { ServiceProfesionalesService } from '@profesionales/services/service-profesionales.service';
import { response } from 'express';
import { profesionales } from '@profesionales/models/profesionales.model';

@Component({
  selector: 'app-profesionales',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './profesionales.component.html',
  styleUrl: './profesionales.component.css'
})
export class ProfesionalesComponent {
  

  profesionalA : profesionales[] = [];

  constructor(private ServiceProfesionalesService: ServiceProfesionalesService ){}

  ngOnInit(): void {
    // this.getMethod();
    // this.getdato(1);
}
getProfesionales(){
    this.ServiceProfesionalesService.getProfesionales().subscribe({
      next: (response) => {
        console.log(response);
        this.profesionalA = response;
      },
    });
  }
  postProfesionales(profesionalA : profesionales){
    this.ServiceProfesionalesService.postProfesionales(profesionalA  ).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
  putProfesionales( id_persona: number,
    nombre1: string,
    nombre2: string,
    apellido1: string,
    apellido2: string,
    correo: string,
    imagen: string,
    profesion: string,
    profesionalA : profesionales){
    this.ServiceProfesionalesService.putProfesionales( id_persona,
      nombre1,
      nombre2,
      apellido1,
      apellido2,
      correo,
      imagen,
      profesion,
      profesionalA ).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
  patchProfesionales(
    id_persona: number, nombre1: string, nombre2: string, apellido1: string, apellido2: string, correo: string, imagen: string, profesion: string, profesionalA: profesionales
  ) {
    this.ServiceProfesionalesService.patchProfesionales( id_persona, nombre1,nombre2, apellido1, apellido2, correo, imagen, profesion, profesionalA
    ).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
 
  deleteProfesionales(id_persona: number,  nombre1: string, nombre2: string, apellido1: string, apellido2: string,correo: string, imagen: string, profesion: string ) {
    this.ServiceProfesionalesService.deleteProfesionales(id_persona).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
 
}

