import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsRoutingModule } from './reactive-form-routing.module';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';



@NgModule({
  declarations: [
    ResumeFormComponent,
    ResumeViewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormModule { }
