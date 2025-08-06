import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SteeringRoutingModule } from './steering-routing.module';
import { SteeringComponent } from './steering.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SteeringComponent
  ],
  imports: [
    CommonModule,
    SteeringRoutingModule,
    SharedModule
  ]
})
export class SteeringModule { }
