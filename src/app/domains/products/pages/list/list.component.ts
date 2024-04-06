import { Component, inject, signal,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sign } from 'crypto';
import { error } from 'console';

import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';

import { ProductService } from '../../../shared/services/product.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent,   ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //aqui llamamos al models 
  products = signal<Product[]>([]);
  private productService = inject(ProductService);


  ngOnInit(){
    this.productService.getProducts()
    .subscribe({
      next:(products) => {
        this.products.set(products);
  
      },
      error: () => {

      }
  })

 //metodo para recibir el api


}
}