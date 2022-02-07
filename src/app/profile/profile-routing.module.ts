import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileFormComponent } from './component/profile-form/profile-form.component';
import { ProfileListComponent } from './component/profile-list/profile-list.component';
import { ProfileComponent } from './profile.component';


const routes: Routes = [
  {
    path: '', component: ProfileComponent,
    children: [
      {
        path: '', redirectTo: 'profile', pathMatch: 'full'
      },
      {
        path: 'profile', component: ProfileListComponent
      },
      {
        path: 'profileForm', component: ProfileFormComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
