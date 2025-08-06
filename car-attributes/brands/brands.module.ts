import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BrandsComponent
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    SharedModule
  ]
})
export class BrandsModule { }
