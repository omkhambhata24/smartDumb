import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/app/shared/model/profile.model';

@Component({
  selector: 'app-profile-filter-presentation',
  templateUrl: './profile-filter-presentation.component.html',
  styleUrls: ['./profile-filter-presentation.component.scss']
})
export class ProfileFilterPresentationComponent implements OnInit {

  public profileForm={} as FormGroup;

  @Output() submit : EventEmitter<Event>;
  @Output() close : EventEmitter<Event>;


  public departmentlist?: Department[];
  
  constructor(private router: Router) {
    this.close = new EventEmitter;
   }

  ngOnInit(): void {
  }

  onclose() {
    this.close.emit();
  }

  onfilter(){

  }


}
