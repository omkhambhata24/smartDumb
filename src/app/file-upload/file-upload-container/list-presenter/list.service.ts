import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  private decodeBase64(base64: string): Uint8Array {
    const byteCharacters = atob(base64);
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

   windowFeatures = "left=350px,top=150px,width=1200,height=700";

  public openFile(content:string,type:string){
    const base64:string = content.split(",")[1];
    const byteArray:Uint8Array = this.decodeBase64(base64);
    const fileBlob:Blob = this.createblob(byteArray,type);
    const url:string = URL.createObjectURL(fileBlob);
    window.open(url,"FileView",this.windowFeatures);
  }
}


