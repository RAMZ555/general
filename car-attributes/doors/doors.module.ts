import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoorsRoutingModule } from './doors-routing.module';
import { DoorsComponent } from './doors.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DoorsComponent
  ],
  imports: [
    CommonModule,
    DoorsRoutingModule,
    SharedModule
  ]
})
export class DoorsModule { }
