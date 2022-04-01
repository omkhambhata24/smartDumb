import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadPresentationComponent } from './file-upload-presentation/file-upload-presentation.component';
import { FileUploadComponent } from './file-upload.component';

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
        path: 'file-upload', component: FileUploadComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadRoutingModule { }
