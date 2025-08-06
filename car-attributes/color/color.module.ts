import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorRoutingModule } from './color-routing.module';
import { ColorComponent } from './color.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ColorComponent
  ],
  imports: [
    CommonModule,
    ColorRoutingModule,
    SharedModule
  ]
})
export class ColorModule { }
