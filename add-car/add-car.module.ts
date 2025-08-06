import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCarRoutingModule } from './add-car-routing.module';
import { AddCarComponent } from './add-car.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AddCarComponent
  ],
  imports: [
    CommonModule,
    AddCarRoutingModule,
    SharedModule,
    MultiSelectModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AddCarModule { }
