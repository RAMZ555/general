import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CylindersComponent } from './cylinders.component';

const routes: Routes = [{ path: '', component: CylindersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CylindersRoutingModule { }
