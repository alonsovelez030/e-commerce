import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() showMenuResponsive = new EventEmitter<any>();
  showMenu:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showMenuCategories(){
    this.showMenu = this.showMenu ? false : true;
    this.showMenuResponsive.emit(this.showMenu);
  }
}
