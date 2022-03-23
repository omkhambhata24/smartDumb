import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Assessment1RoutingModule } from './assessment-1-routing.module';
import { UserFormComponent } from './component/user-form/user-form.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DeptPipe } from './pipes/dept.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserFormComponent,
    UserListComponent,
    DeptPipe,
    SortPipe,
    
  ],
  imports: [
    CommonModule,
    Assessment1RoutingModule,
    HttpClientModule,
    SharedModule
   
  ],
  exports: [
    UserFormComponent
  ]
})
export class Assessment1Module { }
