import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { SharedModule } from '../shared/shared.module';
import { FileUploadContainerComponent } from './file-upload-container/file-upload-container.component';
import { FileUploadPresentationComponent } from './file-upload-container/file-upload-presentation/file-upload-presentation.component';
import { ListPresentationComponent } from './file-upload-container/list-presentation/list-presentation.component';
import { FileOverlayComponent } from './file-upload-container/list-presentation/file-overlay/file-overlay.component';


@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadContainerComponent,
    FileUploadPresentationComponent,
    ListPresentationComponent,
    FileOverlayComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    SharedModule
  ]
})
export class FileUploadModule { }
