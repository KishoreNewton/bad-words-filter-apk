import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemoveComponent } from './remove.component';


const routes: Routes = [
  {
    path: '', component: RemoveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoveRoutingModule { }
