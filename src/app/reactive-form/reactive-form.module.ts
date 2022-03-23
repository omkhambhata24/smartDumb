import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsRoutingModule } from './reactive-form-routing.module';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ResumeFormComponent,
    ResumeViewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule,
    SharedModule
  ]
})
export class ReactiveFormModule { }
