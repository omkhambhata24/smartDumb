import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProfileFormComponent } from './profile/component/profile-form/profile-form.component';
import { ProfileListComponent } from './profile/component/profile-list/profile-list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
   { path: 'pipes', component: PipesComponent},
   { path: 'Parent-child', component: ParentComponent},
   { path: 'Form', component: ReactiveFormComponent},
   { path: 'ProfileForm', component: ProfileListComponent},
   { path: 'Profile', component: ProfileFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
