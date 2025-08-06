import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransmissionsRoutingModule } from './transmissions-routing.module';
import { TransmissionsComponent } from './transmissions.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TransmissionsComponent
  ],
  imports: [
    CommonModule,
    TransmissionsRoutingModule,
    SharedModule
  ]
})
export class TransmissionsModule { }
