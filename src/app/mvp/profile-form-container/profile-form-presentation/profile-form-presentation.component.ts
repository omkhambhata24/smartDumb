import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Department } from 'src/app/shared/model/profile.model';

@Component({
  selector: 'app-profile-form-presentation',
  templateUrl: './profile-form-presentation.component.html',
  styleUrls: ['./profile-form-presentation.component.scss']
})
export class ProfileFormPresentationComponent implements OnInit {

  profileForm={} as FormGroup;
  departmentlist?: Department[];

  constructor() { }

  ngOnInit(): void {
  }

  onclose() { }

  clearForm() { }

  onsubmit() { }

  saveProfile() { }

}
