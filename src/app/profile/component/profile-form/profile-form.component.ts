import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department, Profile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  profileForm={} as FormGroup;

  @Input() department={} as Department[];

  @Output() createdProduct: EventEmitter<Profile> = new EventEmitter<Profile>();

  constructor(private formBuilder: FormBuilder, private ProfileService:ProfileService) { }

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

  /*getProfileToEdit(){
    this.ProfileService.getProfileToEdit().subscribe((product:Profile)=>{
      debugger
      this.profileForm.patchValue(profile);
    },(error)=>{
      alert("Something went wrong");
    })
  }*/

  get formControl(){
    return this.profileForm.controls;
  }

}
