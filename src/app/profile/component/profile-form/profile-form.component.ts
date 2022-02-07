import { error } from '@angular/compiler/src/util';
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

  

  isProfileSaveSuccess={} as boolean;
  profileForm={} as FormGroup;

  departmentlist?: Department[];

  @Output() createdProfile: EventEmitter<Profile> = new EventEmitter<Profile>();

  constructor(private formBuilder: FormBuilder, private profileService:ProfileService) { }

  ngOnInit(): void {
    this.buildProfileForm();
    console.log(this.profileForm);
    this.getProfileToEdit();
    this.getDepatmentList();
    /*this.getProfileList();*/
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

  saveProfile() {
    const profileToSave = this.profileForm.value;
    if (this.profileForm.valid) {
      this.createdProfile.emit(profileToSave);
      this.clearForm();
    }
    else{
    console.log(this.formControl);

      console.log("solve Errors")
    }
  }


  getProfileToEdit(){
    this.profileService.getProfileToEdit().subscribe((profile:Profile)=>{
      debugger
      this.profileForm.patchValue(profile);
    },(error)=>{
      alert("Something went wrong");
    })
  }

  get formControl(){
    return this.profileForm.controls;
  }

  getDepatmentList() {
    this.profileService.getDeptList().subscribe((data) => {
      this.departmentlist = data;
    });
  }

  clearForm(){
    this.profileForm.reset();
  }

  createProfile(profile:Profile){
    this.profileService.saveProfile(profile).subscribe((savedProfile) => {
      this.isProfileSaveSuccess = true;
      this.hideMessage();
     /* this.getProfileList();*/
    },
    (error=>{
      alert("Somethings Went Wrong")
    }));
  }

  updateProfile(profile:Profile){
    this.profileService.updateProfile(profile).subscribe((savedProfile) => {
      this.isProfileSaveSuccess = true;
      this.hideMessage();
     /* this.getProfileList();*/
    },
    (error=>{
      alert("Somethings Went Wrong")
    }));
  }

  deleteProfile(id:number){
    debugger
    this.profileService.deleteProfile(id).subscribe((deletedProductId:number)=>{
      console.log("Product Deleted successfully");
      /*this.getProfileList();*/
    })
  }

  hideMessage(){
    setTimeout(() => {
      this.isProfileSaveSuccess = false;
    }, 1000)
  }


}
