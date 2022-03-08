import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Button } from '../model/button.model';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements OnInit {

  @Input() msg: string;
  @Input() buttons: Button[];
  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(name: string) {
    this.buttonClick.emit(name);
  }
}
