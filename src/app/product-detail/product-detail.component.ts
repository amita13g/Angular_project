import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Object;
  date: Date = new Date();

  constructor(
    private route: ActivatedRoute, 
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productsService.getSingleProduct(params.id).subscribe((product) => {
        this.product = product;
      });
    });    

    
  }

}
