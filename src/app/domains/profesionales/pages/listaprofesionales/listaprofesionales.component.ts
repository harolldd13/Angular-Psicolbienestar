import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProfesionalesComponent } from '../../components/profesionales/profesionales.component';
import { Profesional } from '../../../shared/models/profesional.model';
import { LayoutComponent } from '@shared/components/layout/layout.component';


@Component({
  selector: 'app-listaprofesionales',
  standalone: true,
  imports: [ProfesionalesComponent, CommonModule, LayoutComponent],
  templateUrl: './listaprofesionales.component.html',
  styleUrl: './listaprofesionales.component.css'
})
export class ListaprofesionalesComponent {
  //aqui llamamos al models 
  // profesionales = signal<Profesional[]>([]);

  constructor(){
  //   const initProfesionals: Profesional[] =[
  //     {
        
  //       id: Date.now(),
  //       title: 'juan',
  //       descripcion: 'amable caristmatico',
  //       image: 'https://picsum.photos/640/640?=20'

  //     },
  //     {
        
  //       id: Date.now(),
  //       title: 'Maria',
  //       descripcion: 'amable caristmatico',
  //       image: 'https://picsum.photos/640/640?=29'

  //     },
  //     {
        
  //       id: Date.now(),
  //       title: 'juan',
  //       descripcion: 'amable caristmatico',
  //       image: 'https://picsum.photos/640/640?=20'

  //     },
  //     {
        
  //       id: Date.now(),
  //       title: 'Maria',
  //       descripcion: 'amable caristmatico',
  //       image: 'https://picsum.photos/640/640?=29'

  //     },
  //   ];

  //   this.profesionales.set(initProfesionals)
  // }

}
}