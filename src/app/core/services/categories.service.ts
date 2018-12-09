import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Models */
import { Categories } from '../../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categorielist:Categories[];
  categorieSelected:Categories;

  constructor(private http: HttpClient) {
    this.getCategoriesData();
  }

  getCategoriesData(){
    this.http.get<any>('http://localhost:4200/assets/json-files/categories.json')
    .subscribe(
      response =>{
        this.categorielist = response.categories;
      },err =>{}
    );
  }

  setCategorie(level){
    if(level.sublevels){
      this.categorielist = level.sublevels
    }
    this.categorieSelected = level.id;
  }

  resetCategories(){
    this.getCategoriesData();
    this.categorieSelected = null;
  }
}
