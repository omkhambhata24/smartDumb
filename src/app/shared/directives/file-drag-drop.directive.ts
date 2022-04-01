import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[FileDragDrop]'
})
export class FileDragDropDirective {

  @Output() public filesChangeEmitter: EventEmitter<File[]> = new EventEmitter();
  @HostBinding('style.background') private background = '#d1d1d1';
  @HostBinding('style.border') private borderStyle = '2px dashed';
  @HostBinding('style.border-color') private borderColor = '#fa2929';
  @HostBinding('style.border-radius') private borderRadius = '10px';

  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.background = 'lightgray';
    this.borderColor = 'red';
    this.borderStyle = '3px solid';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#eee';
    this.borderColor = '#fa2929';
    this.borderStyle = '2px dashed';
  }

  @HostListener('drop', ['$event']) public onDrop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#eee';
    this.borderColor = '#fa2929';
    this.borderStyle = '2px dashed';

    let valid_files: Array<File> = [];
    for (let file of event.dataTransfer.files) {
      if ((file.size / (1024 ** 2)) < 2) {
        valid_files.push(file);
      } else {
        console.error("File size limit (2 MB) exceeded");
      }
    }
    this.filesChangeEmitter.emit(valid_files);
  }
}
