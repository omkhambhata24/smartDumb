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
    console.log(this.formControl);
  }


  buildProfileForm() {
    this.profileForm = this.formBuilder.group({

      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.email]],
      phone:['',[Validators.pattern(/\([0-9]{3}\)-\([0-9]{3}\)-[0-9]{4}$/),Validators.required]],
      department: [,],
      gender: [true,Validators.required],
      employment: ['', Validators.required],
      
    });
  }
// \([0-9]{3}\)-\([0-9]{3}\)-[0-9]{4}
  saveProfile() {
    const profileToSave = this.profileForm.value;
    if (this.profileForm.valid) {
      /*this.createdProfile.emit(profileToSave);
      this.resetForm();*/
    }
    else{
    console.log(this.formControl);

      console.log("solve Errors")
    }
  }

  get formControl(){
    return this.profileForm.controls;
  }

}
