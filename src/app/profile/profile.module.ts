import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProfileRoutingModule } from './profile-routing.module';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';


@NgModule({
  declarations: [
  ],
  
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormComponent,
    HttpClientModule
  ]
})
export class ProfileModule { }
