import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration =0;
  @Input({required: true}) message ='';

  constructor(){
    console.log('constructor');
    console.log('-', repeat(10));
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('constructor');
    console.log('-', repeat(10));
    console.log(changes);

  }
  ngOnInit () {
    console.log('ngOnInit');
    console.log('-', repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);

  }

}



