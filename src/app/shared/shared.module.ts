import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Pipes */
import { RangePipe } from './pipes/range.pipe';
import { AvailablePipe } from './pipes/available.pipe';
import { OrderByPipe } from './pipes/sort.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RangePipe,
    AvailablePipe,
    OrderByPipe
  ],
  exports: [
    RangePipe,
    AvailablePipe,
    OrderByPipe
  ]
})
export class SharedModule { }
