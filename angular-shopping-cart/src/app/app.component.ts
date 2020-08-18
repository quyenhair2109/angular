import { Component } from '@angular/core';
import {Product} from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: Product[] = [
    {
      id: '1',
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 5.99,
      quantity: 2
    },
    {
      id: '2',
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 1
    },
    {
      id: '3',
      name: 'PRODUCT ITEM NUMBER 3',
      description: 'Description for product item number 3',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 1
    }
  ]
}
