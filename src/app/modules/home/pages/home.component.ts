import { Component, OnInit } from '@angular/core';

/* Models */
import { Products } from '../../../models/products';

/* Services */
import { ProductsService } from '../../../core/services/products.service';
import { CategoriesService } from '../../../core/services/categories.service';
import { ShoppingCarService } from '../../../core/services/shopping-car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList:Products[];
  Title:string;
  Filters:any = {};
  FilterOptions:any;
  showFilter:boolean = false;

  constructor(public products: ProductsService,
              private categories: CategoriesService,
              private shopping: ShoppingCarService) {
  }

  ngOnInit() {
    this.getProducts();

    /* ChangeCategorie */
    this.categories.getSelectedCategorie$
    .subscribe(
      response =>{
        this.Filters.categorie = response;
        this.getProducts();

        /* Clean Options Search */
        this.FilterOptions.search = '';
      }
    );
  }

  getProducts(){
    this.Title  = (this.Filters.categorie) ? this.Filters.categorie.name : "Todos los productos";

    this.products.getProductsData()
    .subscribe(
      response =>{
        /* Filter */
        if(this.Filters.categorie){
          this.productList = response.products
          .filter(
            x =>{
              if(this.Filters.categorie)
                return x.sublevel_id == this.Filters.categorie.id;
              else return x;
            }
          )
        }
        else this.productList = response.products;
      },err => {}
    )
  }

  triggerFilter(event){
    this.FilterOptions = event;
  }

  showFilterFn(){
    this.showFilter = this.showFilter ? false : true;
  }

  addShopping(event){
    this.shopping.addProducts(event);
  }
}
