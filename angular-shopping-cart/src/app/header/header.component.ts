import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  title = "Shopping Cart"

  numberItems:number = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
