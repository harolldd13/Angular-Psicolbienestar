import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from '@categorias/components/categoria/categoria.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-amorpropio',
  standalone: true,
  imports: [CommonModule, CategoriaComponent, LayoutComponent, RouterLinkWithHref],
  templateUrl: './amorpropio.component.html',
  styleUrl: './amorpropio.component.css'
})
export class AmorpropioComponent {

}
