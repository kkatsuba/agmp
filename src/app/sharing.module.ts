import { NgModule } from '@angular/core';
import { FilterByPipe } from './pipes/filter-by/filter-by.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { DurationPipe } from './pipes/duration/duration.pipe';

const modules = [
  OrderByPipe,
  FilterByPipe,
  DurationPipe
];

@NgModule({
  declarations: modules,
  providers: [
    OrderByPipe
  ],
  exports: modules
})
export class SharingModule {}
