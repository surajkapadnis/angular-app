import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [];

  constructor(productService: ProductService) {
    productService
      .get()
      .subscribe(response => {
        const body = response.json();
        this.products = body.data;
      });
  }

  ngOnInit() {
  }

}