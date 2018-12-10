import { Injectable } from '@angular/core';

/* Storage */
import { LocalStorageService, LocalStorage } from 'angular-web-storage';

@Injectable()
export class ShoppingCarService {

  shipping:any[];

  constructor(public localStorage: LocalStorageService) {
    //this.localStorage.remove('shipping');
    this.getProductList()
  }

  getProductList(){
    this.shipping = this.localStorage.get('shipping') || [];
  }

  addProducts(product){
    
    if(this.shipping.length){
      var index = this.shipping.findIndex(x => x.product.id == product.id);
      if (index === -1){
        this.shipping.push({quantity:1,product:product});
      }else{
        this.shipping.filter(x => x.product.id == product.id).map(x=>{ x.quantity++ });
      }
    } else this.shipping.push({quantity:1,product:product});

    this.localStorage.set('shipping',this.shipping);
  }
}
