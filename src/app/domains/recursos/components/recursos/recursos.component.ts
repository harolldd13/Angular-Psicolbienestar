import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';

@Component({
  selector: 'app-recursos',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref,],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.css'
})
export class RecursosComponent {

}
