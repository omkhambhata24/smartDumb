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
      Email: ['',Validators.email],
      phone:['',[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/),Validators.required]],
      department: [,],
      gender: [true,Validators.required],
      datepicker: ['', Validators.required],
      
    });
  }

  saveProfile() {
    const productToSave = this.profileForm.value;
    if (this.profileForm.valid) {
      /*this.createdProfile.emit(productToSave);
      this.resetForm();*/
    }
    else{
      console.log("solve Errors")
    }
  }

  get formControl(){
    return this.profileForm.controls;
  }

}
