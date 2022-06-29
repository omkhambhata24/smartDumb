import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectionFormRoutingModule } from './projection-form-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProjectionFormRoutingModule,
    SharedModule
  ]
})
export class ProjectionFormModule { }
