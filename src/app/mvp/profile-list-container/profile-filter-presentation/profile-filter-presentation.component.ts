import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-filter-presentation',
  templateUrl: './profile-filter-presentation.component.html',
  styleUrls: ['./profile-filter-presentation.component.scss']
})
export class ProfileFilterPresentationComponent implements OnInit {

  public profileForm={} as FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onclose(){

  }

  onsubmit(){

  }


}
