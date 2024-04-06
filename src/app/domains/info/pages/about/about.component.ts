import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLinkWithHref } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';

import { CounterComponent } from '../../../shared/components/counter/counter.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CounterComponent, RouterLinkWithHref, LayoutComponent ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {



}
