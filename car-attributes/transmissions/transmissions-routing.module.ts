import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransmissionsComponent } from './transmissions.component';

const routes: Routes = [{ path: '', component: TransmissionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransmissionsRoutingModule { }
