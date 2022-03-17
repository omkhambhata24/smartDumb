import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormListComponent } from './form-list.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormListRoutingModule } from './form-list-routing.module';



@NgModule({
  declarations: [
    FormListComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormListModule { }
