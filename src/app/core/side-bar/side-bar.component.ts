import { Component, OnInit, Input } from '@angular/core';

/* Services */
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  backButton:boolean = false;
  showMenuCategories:boolean;
  @Input() set changeView(show: boolean) {
    this.showMenuCategories = show;
  };

  constructor(public categories: CategoriesService) {
   }

  ngOnInit() {}

  loadCats(level){
    this.backButton = true;
    this.categories.setCategorie(level);
  }

  resetCategories(){
    this.backButton = false;
    this.categories.resetCategories();
  }
}
