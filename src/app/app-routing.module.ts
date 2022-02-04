import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProfileFormComponent } from './profile/component/profile-form/profile-form.component';
import { ProfileListComponent } from './profile/component/profile-list/profile-list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
   { path: 'pipes', 
   loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule)
  },
   { path: 'Parent-child',
    loadChildren: () => import('./parent/parent.module').then(m => m.ParentModule)
  },
   { path: 'Form', 
   loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule)
  },
   { path: 'ProfileForm', component: ProfileFormComponent},
   { path: 'Profile', component: ProfileListComponent}

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
