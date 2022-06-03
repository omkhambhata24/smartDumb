import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressFormContainerComponent } from './progress-form-container.component';

const routes: Routes = [
  {
    path: '',component:ProgressFormContainerComponent,
    children: [
      {
        path: 'progress-form', component: ProgressFormContainerComponent
      },
    //   {
    //     path: 'edit/:id', component: ProfileFormContainerComponent
    //   },
    //   {
    //     path: 'list', component: ProfileListContainerComponent
    //   },
    //   {
    //     path: '', redirectTo: 'list', pathMatch: 'full'
    //   },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressFormContainerRoutingModule { }
