import { error } from '@angular/compiler/src/util';
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  /*
  isEditMode: boolean = false;
  currentEmpDataId: number;
  subscriptions: Observable<Employee>[];
*/
  
  isProfileSaveSuccess={} as boolean;
  profileForm={} as FormGroup;
  departmentlist?: Department[];


  constructor(private formBuilder: FormBuilder, private profileService: ProfileService, private route: Router) { }

  ngOnInit(): void {
    this.buildProfileForm();
    console.log(this.profileForm);
    this.getDepatmentList();
  }


  buildProfileForm() {
    this.profileForm = this.formBuilder.group({

      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.email]],
      phone:['',[Validators.pattern(/\([0-9]{3}\)-\([0-9]{3}\)-[0-9]{4}$/),Validators.required]],
      department: [0],
      gender: [true,Validators.required],
      employment: ['', Validators.required],
      
    });
  }


  saveProfile(){

    console.log(this.profileForm);
    if (this.profileForm.status === 'VALID') {
      this.saveprofileData();
      this.route.navigate(['/profile/profile-list']);
    } else {
      alert("INVALID DATA");
    }

  }

  saveprofileData(){
    console.log()
  }

  getDepatmentList() {
    this.profileService.getDeptList().subscribe((data) => {
      this.departmentlist = data;
    });
  }

  clearForm(){
    this.profileForm.reset();
  }

}
