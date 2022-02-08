import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileFormComponent } from './component/profile-form/profile-form.component';
import { ProfileListComponent } from './component/profile-list/profile-list.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: 'profile', pathMatch: 'full'
      },
      {
        path: 'add', component: ProfileFormComponent
      },
      {
        path: 'edit/:id', component: ProfileFormComponent
      },
      {
        path: 'profile', component: ProfileListComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
