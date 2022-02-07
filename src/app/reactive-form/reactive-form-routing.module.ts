import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form.component';


const routes: Routes = [
  {
    path: ' ', component: ReactiveFormComponent
  }

];  
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsRoutingModule { }
