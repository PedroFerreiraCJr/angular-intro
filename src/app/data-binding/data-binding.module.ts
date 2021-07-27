import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding.component';

import { InputPropertyModule } from './../input-property/input-property.module';
import { OutputPropertyModule } from './../output-property/output-property.module';


@NgModule({
  declarations: [DataBindingComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputPropertyModule,
    OutputPropertyModule
  ],
  exports: [DataBindingComponent]
})
export class DataBindingModule { }
