import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  products:any[];
  @Input() set ProductList(data:any) {
    this.products = data;
  };

  @Output() addShopping = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
