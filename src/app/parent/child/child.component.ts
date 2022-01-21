import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() fromParent?: string;

  @Output() fromChild: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  

  passToParent(value: string) {
    // the .emit() function emits the event that is listened to by parent.
    this.fromChild.emit(value);
  }
}
