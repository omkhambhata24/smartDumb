import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormListComponent } from './form-list.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormListRoutingModule } from './form-list-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FormListComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormListRoutingModule,
    SharedModule
  ]
})
export class FormListModule { }
