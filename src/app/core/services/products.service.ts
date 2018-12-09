import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getProductsData(): Observable<any>{
    return this.http.get<any>('http://localhost:4200/assets/json-files/products.json');
  }
}
