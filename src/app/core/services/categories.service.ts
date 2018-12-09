import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Models */
import { Categories } from '../../models/categories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categorielist:Categories[];
  categorieSelected:Categories;

  constructor(private http: HttpClient) {
  }

  getCategoriesData(): Observable<any>{
    return this.http.get<any>('http://localhost:4200/assets/json-files/categories.json')
  }

  setCategorie(level){
    if(level.sublevels){
      this.categorielist = level.sublevels
    }
    this.categorieSelected = level.id;
  }

  resetCategories(){
    this.categorieSelected = null;
  }
}
