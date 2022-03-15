import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MVPRoutingModule } from './mvp-routing.module';
import { MVPComponent } from '../mvp/mvp.component';
import { ProfileFormContainerComponent } from './profile-form-container/profile-form-container.component';
import { ProfileListContainerComponent } from './profile-list-container/profile-list-container.component';
import { ProfileFormPresentationComponent } from './profile-form-container/profile-form-presentation/profile-form-presentation.component';
import { ProfileListPresentationComponent } from './profile-list-container/profile-list-presentation/profile-list-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MVPComponent,
    ProfileFormContainerComponent,
    ProfileListContainerComponent,
    ProfileFormPresentationComponent,
    ProfileListPresentationComponent
  ],
  imports: [
    CommonModule,
    MVPRoutingModule,
    ReactiveFormsModule
  ]
})
export class MVPModule { }
