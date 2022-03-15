import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileFormContainerComponent } from './profile-form-container/profile-form-container.component';
import { ProfileListContainerComponent } from './profile-list-container/profile-list-container.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: 'mvp', pathMatch: 'full'
      },
      {
        path: 'add', component: ProfileFormContainerComponent
      },
      {
        path: 'edit/:id', component: ProfileFormContainerComponent
      },
      {
        path: 'mvp', component: ProfileListContainerComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MVPRoutingModule { }
