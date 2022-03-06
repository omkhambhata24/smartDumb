import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileFormComponent } from './component/profile-form/profile-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*import { PhoneMaskDirective } from './component/profile-form/phone-mask.directive';*/
import { ProfileListComponent } from './component/profile-list/profile-list.component';
import { DeptPipe } from './pipes/dept.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop'





@NgModule({
  declarations: [
    ProfileFormComponent,
    ProfileListComponent,
    DeptPipe,
    SearchPipe,
   /*PhoneMaskDirective */
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
  ],
  exports: [
    ProfileFormComponent
  ]
})
export class ProfileModule { }
