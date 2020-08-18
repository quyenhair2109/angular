import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  @Input() products

  constructor() { }

  ngOnInit(): void {
  }

  removeProduct(productId: string):void{
    // tìm phần tử để xóa
    const index = this.products.findIndex(product => product.id === productId);
    this.products.splice(index, 1);
  }

  updateQuantity(element){
    console.log(element.value);
  }
}
