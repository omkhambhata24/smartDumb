import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';


@Directive({
  selector: '[FileDragDrop]'
})
export class FileDragDropDirective {

  @Output() readFile: EventEmitter<any>;
  constructor() {
    this.readFile = new EventEmitter();
  }

  @HostListener('dragover', ['$event']) public onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop', ['$event']) public onDrop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.readFile.emit(event.dataTransfer);
  }

  //   let valid_files: Array<File> = [];
  //   for (let file of event.dataTransfer.files) {
  //     if ((file.size / (1024 ** 2)) < 2) {
  //       valid_files.push(file);
  //     } else {
  //       console.error("File size limit (2 MB) exceeded");
  //     }
  //   }
  //   this.filesChangeEmitter.emit(valid_files);
  }

