import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Files } from '../model/file.model';
import { FileService } from '../service/file.service';

@Component({
  selector: 'app-file-upload-container',
  templateUrl: './file-upload-container.component.html',
  styleUrls: ['./file-upload-container.component.scss']
})
export class FileUploadContainerComponent implements OnInit {

  
  public filesList$: Observable<Files[]>


  constructor(private fileService: FileService) { 
    this.filesList$ = new Observable<Files[]>();
  }

  ngOnInit(): void {
    this.filesList$ = this.fileService.getAllFiles();
  }

  UploadFile(file: Files) {
    this.fileService.addFile(file).subscribe({
      next: () => {
        alert("File Added");
        this.filesList$ = this.fileService.getAllFiles();
      },
      error: (e) => { console.log(e) }
    })
  }

  

}
