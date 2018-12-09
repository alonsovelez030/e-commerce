import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

/* Models */
import { Categories } from '../../models/categories';

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
  selectedCategorie:Categories;
  @Input() set changeView(show: boolean) {
    this.showMenuCategories = show;
  };
  categorielist:Categories[];

  constructor(public categories: CategoriesService) {}

  ngOnInit() {
    this.reloadCats();

    /* CategorieSelected */
    this.categories.getSelectedCategorie$
    .subscribe(response => {
      this.selectedCategorie = response;
    });
  }

  reloadCats(){
    this.categories.getCategoriesData()
    .subscribe(
      response =>{
        this.categorielist = response.categories;
      },err =>{}
    );
  }

  loadCats(level){
    this.backButton = true;
    if(level.sublevels){
      this.categorielist = level.sublevels
    }
    this.categories.setCategorie(level);
  }

  resetCategories(){
    this.backButton = false;
    this.reloadCats();
    this.categories.resetCategories();
  }
}
