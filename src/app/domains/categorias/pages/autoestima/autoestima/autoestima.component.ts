import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from '@categorias/components/categoria/categoria.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';



@Component({
  selector: 'app-autoestima',
  standalone: true,
  imports: [CommonModule, CategoriaComponent,LayoutComponent, RouterLinkWithHref ],
  templateUrl: './autoestima.component.html',
  styleUrl: './autoestima.component.css'
})
export class AutoestimaComponent {

}
