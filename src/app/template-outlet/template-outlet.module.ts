import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateOutletRoutingModule } from './template-outlet-routing.module';
import { ItemViewComponent } from './item-view/item-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateOutletComponent } from './template-outlet.component';


@NgModule({
  declarations: [
    ItemViewComponent,
    TemplateOutletComponent
  ],
  imports: [
    CommonModule,
    TemplateOutletRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class TemplateOutletModule { }
