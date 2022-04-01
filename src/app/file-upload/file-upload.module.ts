import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadPresentationComponent } from './file-upload-presentation/file-upload-presentation.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadPresentationComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    SharedModule
  ]
})
export class FileUploadModule { }
