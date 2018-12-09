import { Component, OnInit } from '@angular/core';

/* Models */
import { Products } from '../../../models/products';

/* Services */
import { ProductsService } from '../../../core/services/products.service';
import { CategoriesService } from '../../../core/services/categories.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList:Products[];
  Title:string;

  constructor(public products: ProductsService,
              private categories: CategoriesService) {
  }

  ngOnInit() {
    this.getAllProducts();
    this.categories.getSelectedCategorie$
    .subscribe(
      response =>{
        if (response) this.filterProducts({'categorie':response});
        else this.getAllProducts();
      }
    );
  }

  getAllProducts(){
    this.Title = "Todos los productos";
    this.products.getProductsData()
    .subscribe(
      response =>{
        this.productList = response.products;
      },err => {}
    )
  }

  filterProducts(filter){
    if(filter.categorie) this.Title = filter.categorie.name;

    /* Prepare filter */
    this.products.getProductsData()
    .subscribe(
      response =>{
        this.productList = response.products
        .filter(
          x =>{
            if(filter.categorie)
              return x.sublevel_id == filter.categorie.id;
          }
        )
      },err => {}
    )
  }
}
