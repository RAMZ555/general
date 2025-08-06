import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SteeringComponent } from './steering.component';

const routes: Routes = [{ path: '', component: SteeringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SteeringRoutingModule { }
