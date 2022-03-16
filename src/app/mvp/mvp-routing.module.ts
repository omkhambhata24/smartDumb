import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MVPComponent } from './mvp.component';
import { ProfileFormContainerComponent } from './profile-form-container/profile-form-container.component';
import { ProfileListContainerComponent } from './profile-list-container/profile-list-container.component';

const routes: Routes = [
  {
    path: '',component:MVPComponent,
    children: [
      {
        path: 'add', component: ProfileFormContainerComponent
      },
      {
        path: 'edit/:id', component: ProfileFormContainerComponent
      },
      {
        path: 'list', component: ProfileListContainerComponent
      },
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MVPRoutingModule { }
