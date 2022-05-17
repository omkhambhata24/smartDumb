import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { Button } from 'src/app/shared/model/button.model';
import { FileOverlayComponent } from '../list-presentation/file-overlay/file-overlay.component';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private overlay: Overlay) { }

  

  // private decodeBase64(base64: string): Uint8Array {
  //   const byteCharacters = atob(base64);
  //   const byteNumbers = new Array(byteCharacters.length);
  //   for (let i = 0; i < byteCharacters.length; i++) {
  //     byteNumbers[i] = byteCharacters.charCodeAt(i);
  //   }
  //   const byteArray = new Uint8Array(byteNumbers);
  //   return byteArray;
  // }

  // private createblob(byteArray: Uint8Array, type: string): Blob {
  //   const blob = new Blob([byteArray], { type: type });
  //   return blob;
  // }

  //  windowFeatures = "left=350px,top=150px,width=1200,height=700";

  // public openFile(content:string,type:string){
  //   const base64:string = content.split(",")[1];
  //   const byteArray:Uint8Array = this.decodeBase64(base64);
  //   const fileBlob:Blob = this.createblob(byteArray,type);
  //   const url:string = URL.createObjectURL(fileBlob);
  //   window.open(url,"FileView",this.windowFeatures);
  // }

  private _fileOverlayRef!: OverlayRef;
  private _fileOverlayComponentRef!: ComponentRef<FileOverlayComponent>;

  public displayFileOverlay(file: any): void {
    let viewOverlayConfig: OverlayConfig = {
      hasBackdrop: true,
      backdropClass: "file-overlay-backdrop",
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically().height('100%').width('100%')
    };

    this._fileOverlayRef = this.overlay.create(viewOverlayConfig);

    const viewOverlayComponent = new ComponentPortal(FileOverlayComponent);

    this._fileOverlayComponentRef = this._fileOverlayRef.attach(viewOverlayComponent);

    this._fileOverlayComponentRef.instance.file = file;

    // this._fileOverlayComponentRef.instance.buttons = [
    //   new Button('Close', 'secondary', 'close'),
    // ];

    this._closeFileOverlay();
  }

  private _closeFileOverlay(): void {
    this._fileOverlayRef.backdropClick().subscribe(() => {
      this._fileOverlayRef.detach();
    });

    this._fileOverlayComponentRef.instance.buttonClick.subscribe((val) => {
      if (val === 'close') {
        this._fileOverlayRef.detach();
      }
    });
  }
  
}


