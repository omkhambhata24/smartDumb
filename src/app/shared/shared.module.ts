import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { FileDragDropDirective } from './directives/file-drag-drop.directive';




@NgModule({
  declarations: [
    FileDragDropDirective
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    FileDragDropDirective
  ]
})
export class SharedModule { }
