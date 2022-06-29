import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectionFormComponent } from './projection-form.component';

const routes: Routes = [
  {path: '', component:ProjectionFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectionFormRoutingModule { }
