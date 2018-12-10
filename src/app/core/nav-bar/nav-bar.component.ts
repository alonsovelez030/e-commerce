import { Component, OnInit, EventEmitter, Output } from '@angular/core';

/* Services */
import { ShoppingCarService } from '../services/shopping-car.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() showMenuResponsive = new EventEmitter<any>();
  showMenu:boolean = false;
  showShip:boolean = false;
  shippingList:any[];

  constructor(private shopping: ShoppingCarService) {
  }

  ngOnInit() {
    this.shippingList = this.shopping.shipping;
  }

  showMenuCategories(){
    this.showMenu = this.showMenu ? false : true;
    this.showMenuResponsive.emit(this.showMenu);
  }

  showShippingCar(){
    this.showShip = this.showShip ? false : true;
  }
}
