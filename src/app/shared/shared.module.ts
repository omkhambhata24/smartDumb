import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
  ]
})
export class SharedModule { }
