import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateOutletRoutingModule } from './template-outlet-routing.module';
import { ItemViewComponent } from './item-view/item-view.component';
import { TemplateOutletComponent } from './template-outlet.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ItemViewComponent,
    TemplateOutletComponent
  ],
  imports: [
    CommonModule,
    TemplateOutletRoutingModule,
    SharedModule
  ],
})
export class TemplateOutletModule { }
