import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadContainerComponent } from './file-upload-container/file-upload-container.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: 'file-upload', pathMatch: 'full'
      },
      // {
      //   path: 'add', component: ProfileFormComponent
      // },
      {
        path: 'file-upload', component: FileUploadContainerComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadRoutingModule { }
