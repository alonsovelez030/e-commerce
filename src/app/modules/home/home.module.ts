/* Core */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

/* Components */
import { HomeComponent } from './pages/home.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    ProductCardComponent
  ]
})
export class HomeModule { }
