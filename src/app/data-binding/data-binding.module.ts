import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding.component';
import { InputPropertyModule } from './../input-property/input-property.module';


@NgModule({
  declarations: [DataBindingComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputPropertyModule
  ],
  exports: [DataBindingComponent]
})
export class DataBindingModule { }
