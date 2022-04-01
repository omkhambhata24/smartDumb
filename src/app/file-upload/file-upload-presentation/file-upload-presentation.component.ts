import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileUploadService } from '../file-upload-presenter/file-upload.service';


@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss']
})
export class FileUploadPresentationComponent implements OnInit {
  @Output() filesList:EventEmitter<any> = new EventEmitter<any>();


  //files array
  public files: any[] = [];
  constructor(private fup:FileUploadService,private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fup.files$.subscribe(res=>{
      this.filesList.emit(res);
      this.cdr.markForCheck();
      this.files = res;
    });
  }

  onFileChange(file:any){
    this.fup.getFiles(file);
  }
  
  openConfirmDialog(index:number){
    alert(index);
  }
}
