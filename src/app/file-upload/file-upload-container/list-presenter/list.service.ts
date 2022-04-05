import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  private decodeBase64(b64: string): Uint8Array {
    const byteCharacters = atob(b64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return byteArray;
  }

  private createblob(byteArray: Uint8Array, type: string): Blob {
    const blob = new Blob([byteArray], { type: type });
    return blob;
  }

   windowFeatures = "left=50%,top=50%,width=800,height=800";

  public openFile(content:string,type:string){
    const b64:string = content.split(",")[1];
    const byteArray:Uint8Array = this.decodeBase64(b64);
    const fileBlob:Blob = this.createblob(byteArray,type);
    const url:string = window.URL.createObjectURL(fileBlob);
    window.open(url,"FileView",this.windowFeatures);
  }
}


