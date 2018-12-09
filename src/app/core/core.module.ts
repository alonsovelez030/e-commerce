import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SuiDropdownModule } from 'ng2-semantic-ui';
import { HttpClientModule } from '@angular/common/http';

/* Services */
import { ShoppingCarService } from './services/shopping-car.service';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';

@NgModule({
  imports: [
    CommonModule,
    SuiDropdownModule,
    HttpClientModule
  ],
  declarations: [
    NotFoundComponent,
    NavBarComponent,
    SideBarComponent
  ],
  exports:[
    NotFoundComponent,
    NavBarComponent,
    SideBarComponent
  ],
  providers:[
    ShoppingCarService,
    ProductsService,
    CategoriesService
  ]
})
export class CoreModule { }
