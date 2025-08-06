import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarAttributesRoutingModule } from './car-attributes-routing.module';
import { CarAttributesComponent } from './car-attributes.component';


@NgModule({
  declarations: [
    CarAttributesComponent
  ],
  imports: [
    CommonModule,
    CarAttributesRoutingModule
  ]
})
export class CarAttributesModule { }
