import { Injectable } from '@angular/core';

/* Storage */
import { LocalStorageService, LocalStorage } from 'angular-web-storage';

@Injectable()
export class ShoppingCarService {

  shipping:any[];

  constructor(public localStorage: LocalStorageService) {
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

  modifyShipping(product,action){
    if(action == 'subtract'){
      if(product.quantity <= 1){
        const index = this.shipping.indexOf(product);
        this.shipping.splice(index, 1);
      }else this.shipping.filter(x => x.product.id == product.product.id).map(x=>{ x.quantity--});
    }else if(action == 'added'){
      this.shipping.filter(x => x.product.id == product.product.id).map(x=>{ x.quantity++ });
    }

    this.localStorage.set('shipping',this.shipping);
  }

  cleanShooping(){
    this.shipping.length = 0;
    this.localStorage.remove('shipping');
  }
}
