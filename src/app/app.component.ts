import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ServiceHcService } from '@historiaClinica/services/service-hc.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, ],
  template: '<router-outlet />',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'psicolHistoriaClinica';
  constructor(private serviceHcService: ServiceHcService) {}

 
}
