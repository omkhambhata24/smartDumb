import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Files } from '../../model/file.model';
import { FileUploadService } from '../file-upload-presenter/file-upload.service';



@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss'],
  viewProviders: [FileUploadService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadPresentationComponent implements OnInit {

  public kfile: File[];
  public startDate:string;
  public endDate:string;
  public dateForm : FormGroup;
  public fileInput: FormControl;
 
  @Output() filesUpload: EventEmitter<Files>;

  constructor(private _fups: FileUploadService) {
    this.kfile = [];
    this.filesUpload = new EventEmitter<Files>();
    this.fileInput = new FormControl(null);
  }

  ngOnInit(): void {
    this.dateForm = this._fups.buildDateForm();
    this._fups.filesUpload$.subscribe({
      next: (file) => {
        console.log(file)
        this.filesUpload.emit(file);
        this.kfile = [];
      },
      error: (e) => { console.log(e) }
    })
  }

  readFile(files: any) {
    this.kfile = Array.from(files.files);
  }


  uploadFile() {
    // if (this.file) {
    //   this._fups.uploadFile(this.file)
    //   debugger
    //   this.fileInput.reset();
    // }
    if (this.kfile.length !== 0) {
      this._fups.uploadFile(this.kfile);
    }
    else {
      alert("No File is Selected")
    }
  }

  StartDate(input:any){
    this.startDate=input.value;
  }

  EndDate(input:any){
    this.endDate=input.value;
  }

  removeFile(index: number) {
    this.kfile.splice(index, 1);
  }

  // onFileChange(file:any){
  //   this._fups.getFiles(file);
  // }
  
  // openConfirmDialog(index:number){
  //   alert(index);
  // }

  // removeFiles(filename:string){
  //   this._fups.removeFiles(filename,this.file)
  //   console.log(filename,this.file)
  // }
}
