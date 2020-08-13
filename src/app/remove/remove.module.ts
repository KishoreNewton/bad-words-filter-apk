import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { RemoveRoutingModule } from './remove-routing.module';
import { RemoveComponent } from './remove.component';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [RemoveComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    RemoveRoutingModule
  ]
})
export class RemoveModule { }
