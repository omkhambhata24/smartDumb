import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Files } from '../../model/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private kfiles: Files[];
  private _filesUpload: Subject<Files>;
  public filesUpload$: Observable<Files>;

  constructor(private fb: FormBuilder) {
    this.kfiles = [];
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


  uploadFile(kfiles: File[]) {
    let totalFile = kfiles.length;

    kfiles.forEach(async (file) => {
      //size in mb
      let size = Math.round(file.size / 1024 / 1024)
      let sizeinKb = Math.round(file.size / 1024)
      if (size <= 2) {
        let newfile = {} as Files;
        newfile.name = file.name;
        newfile.size = sizeinKb;
        newfile.type = file.type;

        await this.getConent(file).then((result) => {
          newfile.content = result;
          totalFile--;
        })
        this.kfiles.push(newfile);
        if (totalFile === 0) {
          this.kfiles.forEach((file) => {
            this._filesUpload.next(file)
          })
          this.kfiles = [];
        }
      }
      else {
        alert(`${file.name} Size is above 2mb`)
      }
    })

  }

  private getConent(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        resolve(e.target?.result as string)
      }
    });
  }

}
