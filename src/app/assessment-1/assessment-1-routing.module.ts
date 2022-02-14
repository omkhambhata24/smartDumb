import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './component/user-form/user-form.component';
import { UserListComponent } from './component/user-list/user-list.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      {
        path: '', redirectTo: 'users', pathMatch: 'full'
      },
      {
        path: 'add', component: UserFormComponent
      },
      {
        path: 'edit/:id', component: UserFormComponent
      },
      {
        path: 'users', component: UserListComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Assessment1RoutingModule { }
