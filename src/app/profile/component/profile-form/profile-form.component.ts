import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  profileForm={} as FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildProfileForm();
    console.log(this.profileForm);
  }


  buildProfileForm() {
    this.profileForm = this.formBuilder.group({

      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.email],
      phone:['',[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/),Validators.required,Validators.maxLength(10)]],
      department: [,Validators.required],
      gender: [true,Validators.required],
      datepicker: ['', Validators.required],
      
    });
  }

}
