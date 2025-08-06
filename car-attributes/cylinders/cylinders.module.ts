import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CylindersRoutingModule } from './cylinders-routing.module';
import { CylindersComponent } from './cylinders.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CylindersComponent
  ],
  imports: [
    CommonModule,
    CylindersRoutingModule,
    SharedModule
  ]
})
export class CylindersModule { }
