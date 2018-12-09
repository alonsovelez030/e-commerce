import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* Services */
import { ProductsService } from '../../../core/services/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public products: ProductsService) {}

  ngOnInit() {
    this.products.getProductsData()
    .subscribe(
      response =>{
        this.products.productList = response.products;
      },err => {}
    )
  }


}
