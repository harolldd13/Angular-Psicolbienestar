

import { Component, inject, signal,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sign } from 'crypto';
import { error } from 'console';
import { CategoriaComponent } from '@categorias/components/categoria/categoria.component';
import { Categoria } from '@categorias/models/categoria.model';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { CategoriaservicesService } from '@categorias/services/categoriaservices.service';

@Component({
  selector: 'app-listcategoria',
  standalone: true,
  imports: [CommonModule, CategoriaComponent, LayoutComponent],
  templateUrl: './listcategoria.component.html',
  styleUrl: './listcategoria.component.css'
})
export class ListcategoriaComponent {
  categorias = signal<Categoria[]>([]);
  private categoriaservicesService = inject(CategoriaservicesService);



}
