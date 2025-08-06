import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatsRoutingModule } from './seats-routing.module';
import { SeatsComponent } from './seats.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SeatsComponent
  ],
  imports: [
    CommonModule,
    SeatsRoutingModule,
    SharedModule
  ]
})
export class SeatsModule { }
