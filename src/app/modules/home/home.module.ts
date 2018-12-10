/* Core */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { SuiCheckboxModule } from 'ng2-semantic-ui';
import { SuiSelectModule } from 'ng2-semantic-ui';

/* Components */
import { HomeComponent } from './pages/home.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    SuiCheckboxModule,
    SuiSelectModule
  ],
  declarations: [
    HomeComponent,
    ProductCardComponent
  ]
})
export class HomeModule { }
