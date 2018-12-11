import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output() triggerFilter = new EventEmitter<any>();
  FilterOptions:any = {
    min: 0,
    max: 30000,
    minStock:0,
    maxStock:1000,
    available:false,
    search:'',
    sort: {name:'Precio',field:'-price'},
    sortOptions:[
      {name:'Precio',field:'-price'},
      {name:'Cantidad',field:'-quantity'}
    ]
  };
  constructor() { }

  ngOnInit() {
    this.triggerFilter.emit(this.FilterOptions);
  }

  emitFilter(){
    this.triggerFilter.emit(this.FilterOptions);
  }

}
