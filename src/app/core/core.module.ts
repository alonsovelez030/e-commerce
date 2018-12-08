import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';

/* Services */

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NotFoundComponent
  ],
  exports:[
    NotFoundComponent
  ],
  providers:[]
})
export class CoreModule { }
