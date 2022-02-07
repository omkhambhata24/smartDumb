import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileFormComponent } from './profile/component/profile-form/profile-form.component';
import { ProfileListComponent } from './profile/component/profile-list/profile-list.component';

const routes: Routes = [
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule)
  },
  {
    path: 'Parent-child',
    loadChildren: () => import('./parent/parent.module').then(m => m.ParentModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule)
  },
  { path: 'ProfileForm', component: ProfileFormComponent },
  { path: 'Profile', component: ProfileListComponent }

  /*{
   path: 'profile',
   loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
 }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
