import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterLinkWithHref,  CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
