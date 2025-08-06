import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafetyFeaturesRoutingModule } from './safety-features-routing.module';
import { SafetyFeaturesComponent } from './safety-features.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SafetyFeaturesComponent
  ],
  imports: [
    CommonModule,
    SafetyFeaturesRoutingModule,
    SharedModule
  ]
})
export class SafetyFeaturesModule { }
