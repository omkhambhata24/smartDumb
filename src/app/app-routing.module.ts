import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
   { path: 'pipes', component: PipesComponent},
   { path: 'Parent-child', component: ParentComponent},
   { path: 'Form', component: ReactiveFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
