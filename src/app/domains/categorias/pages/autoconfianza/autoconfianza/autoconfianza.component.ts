import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from '@categorias/components/categoria/categoria.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-autoconfianza',
  standalone: true,
  imports: [CommonModule,CategoriaComponent, LayoutComponent, RouterLinkWithHref],
  templateUrl: './autoconfianza.component.html',
  styleUrl: './autoconfianza.component.css'
})
export class AutoconfianzaComponent {

}
