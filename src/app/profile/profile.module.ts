import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileFormComponent } from './component/profile-form/profile-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*import { PhoneMaskDirective } from './component/profile-form/phone-mask.directive';*/
import { ProfileListComponent } from './component/profile-list/profile-list.component';




@NgModule({
  declarations: [
    ProfileFormComponent,
    ProfileListComponent,
   /*PhoneMaskDirective */
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  exports: [
    ProfileFormComponent
  ]
})
export class ProfileModule { }
