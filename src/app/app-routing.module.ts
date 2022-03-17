import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  
  {
   path: 'Profile',
   loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
 },

 {
  path: 'User',
  loadChildren: () => import('./assessment-1/assessment-1.module').then(m => m.Assessment1Module)
 },
 {
   path: 'artist', 
   loadChildren: () => import('./artists/artists.module').then(m => m.ArtistsModule)
 },
 {
  path: 'template',
   loadChildren: () => import('./template-outlet/template-outlet.module').then(m => m.TemplateOutletModule)
 },
 {
  path: 'mvp',
   loadChildren: () => import('./mvp/mvp.module').then(m => m.MVPModule)
 },
 {
  path: 'form-list',
   loadChildren: () => import('./form-list/form-list.module').then(m => m.FormListModule)
 },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
