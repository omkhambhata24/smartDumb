import { Component, OnInit, Input, Output, EventEmitter,} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  isVisible: boolean = false;
  valueFromChild? : string;
  toChild? : string;
  v_ngModel? : string;

  constructor() { }

  ngOnInit(): void { }

  getFromChild(val: string) {
    this.valueFromChild = val;
  }

  passToChild(val: string) {
    this.toChild = val;
  }


  toggleVisibility() {
    this.isVisible = !this.isVisible;
  } 
}  
  
