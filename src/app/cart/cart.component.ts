import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Array<Object>;
  total: number;

  constructor() { }

  ngOnInit() {
    this.items = this.getCartItems();
    this.total = 930;
  }

  getCartItems() {
    return [
      {
        product: 'Test Product 1',
        price: 530
      },
      {
        product: 'Test Product 2',
        price: 400
      }
    ];
  }

}
