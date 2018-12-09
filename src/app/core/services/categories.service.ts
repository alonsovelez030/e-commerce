import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Models */
import { Categories } from '../../models/categories';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categorieSelected = new Subject<Categories>();
  getSelectedCategorie$ = this.categorieSelected.asObservable();

  constructor(private http: HttpClient) {
  }

  getCategoriesData(): Observable<any>{
    return this.http.get<any>('http://localhost:4200/assets/json-files/categories.json')
  }

  setCategorie(level){
    this.categorieSelected.next(level);
  }

  resetCategories(){
    this.categorieSelected.next(null);
  }
}
