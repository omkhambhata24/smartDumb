import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadPresentationComponent } from './file-upload-presentation/file-upload-presentation.component';


@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadPresentationComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule
  ]
})
export class FileUploadModule { }
