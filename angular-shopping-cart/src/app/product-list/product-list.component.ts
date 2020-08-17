import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 5.99,
      quantity: 2
    },
    {
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 1
    },
    {
      name: 'PRODUCT ITEM NUMBER 3',
      description: 'Description for product item number 3',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 1
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
