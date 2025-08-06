import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SafetyFeaturesComponent } from './safety-features.component';

const routes: Routes = [{ path: '', component: SafetyFeaturesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SafetyFeaturesRoutingModule { }
