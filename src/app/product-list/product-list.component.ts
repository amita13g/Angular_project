import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Object[];

  //private productsService: ProductsService = new ProductsService(); //not to use this pattern

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList(): void {
   //this.products = this.productsService.getProducts(); // This is not real world way.
  //  this.productsService.getProducts().subscribe(function(products) {
  //   this.products = products;
  //  }); //function as an argument in subscribe. () => {}

    this.productsService.getProducts().subscribe((products) => this.products = products);
  }

}
