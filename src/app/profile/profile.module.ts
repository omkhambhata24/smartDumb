import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileFormComponent } from './component/profile-form/profile-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileListComponent } from './component/profile-list/profile-list.component';
import { DeptPipe } from './pipes/dept.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProfileFormComponent,
    ProfileListComponent,
    DeptPipe,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    SharedModule,
  ],
  exports: [
    ProfileFormComponent
  ]
})
export class ProfileModule { }
