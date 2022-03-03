import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticProfileRoutingModule } from './static-profile-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    StaticProfileRoutingModule
  ]
})
export class StaticProfileModule { }
