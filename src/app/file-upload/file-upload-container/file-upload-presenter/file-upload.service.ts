import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Files } from '../../model/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private file: Files;
  private _filesUpload: Subject<Files>;
  public filesUpload$: Observable<Files>;

  constructor(private fb: FormBuilder) {
    this.file = {} as Files;
    this._filesUpload = new Subject<Files>();
    this.filesUpload$ = new Observable<Files>();
    this.filesUpload$ = this._filesUpload.asObservable();
  }

  public buildDateForm() {
    return this.fb.group({
      fromDate: [null],
      toDate: [null],
    })
  }


  getFiles(file: any) {
    this._filesUpload.next(file);
  }

  // removeFiles(filename: string, data: any) {
  //   const index = data.findIndex((file: any) => file.name == filename);
  //   return data.splice(index, 1);
  // }


  uploadFile(file: File) {
    //size in mb
    let size = Math.round(file.size / 1024 / 1024)
    if (size <= 2) {
      this.file.name = file.name;
      this.file.size = size;
      this.file.type = file.type;
      // if (this.file.type === "image/png" || "image/jpg" || "image/jpeg") {
      //   console.log(file.type)
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.file.content = event.target?.result as string;
        this._filesUpload.next(this.file);
      };
    }
    else {
      alert("File Size is above 2MB")
    }
  }

}
