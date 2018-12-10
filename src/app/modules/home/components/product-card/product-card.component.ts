import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

/* Models */
import { Products } from '../../../../models/products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() products:Products[];
  @Input() rangeFilter;

  @Output() addShopping = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
