import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterRoutingModule } from './filter-routing.module';
import { SharedModule } from '../shared/shared.module'
import { FilterComponent } from './filter.component';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    FilterRoutingModule
  ]
})
export class FilterModule { }
