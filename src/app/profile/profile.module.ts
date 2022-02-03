import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProfileRoutingModule } from './profile-routing.module';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { ProfileFormComponent } from './component/profile-form/profile-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneMaskDirective } from './component/profile-form/phone-mask.directive';


@NgModule({
  declarations: [
    ProfileFormComponent,
    PhoneMaskDirective
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ProfileFormComponent
  ]
})
export class ProfileModule { }
