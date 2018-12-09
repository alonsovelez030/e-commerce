import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/* Services */
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  backButton:boolean = false;
  constructor(public categories: CategoriesService) { }

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
