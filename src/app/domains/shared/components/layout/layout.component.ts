import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLinkWithHref } from '@angular/router';


import { FooterComponent } from '../footer/footer.component';
import { NavComponent } from '../nav/nav/nav.component';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule, 
    NavComponent,
    FooterComponent, 
    RouterModule, 
    RouterLinkWithHref],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
