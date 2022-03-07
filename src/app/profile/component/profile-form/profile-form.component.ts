import { error } from '@angular/compiler/src/util';
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department, Profile} from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  @Output() onsubmit : EventEmitter<Event>;
  @Output() close : EventEmitter<Event>;

  isEditMode: boolean = false;
  profileForm={} as FormGroup;
  departmentlist?: Department[];
  currentProfileId: number;


  constructor(private formBuilder: FormBuilder, private profileService: ProfileService, private route: Router, private activeRoute: ActivatedRoute) 
  { 
    this.onsubmit = new EventEmitter<Event>();
    this.close = new EventEmitter<Event>();
  }

  ngOnInit(): void {
    this.buildProfileForm();
    this.getDepatmentList();
    if (this.activeRoute.snapshot.params['id']) {
      this.isEditMode = true;
      this.profileService.getProfileToEdit().subscribe(data => {
        this.currentProfileId = data.id;
        this.profileForm.patchValue(data);
      });
    }
  }


  buildProfileForm() {
    this.profileForm = this.formBuilder.group({

      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.email]],
      phone:['',[Validators.pattern(/\([0-9]{3}\)-\([0-9]{3}\)-[0-9]{4}$/),Validators.required]],
      department: [''],
      gender: ['',Validators.required],
      employment: ['', Validators.required],
      
    });
  }



  saveProfile(){

    console.log(this.profileForm
      );
    if (this.profileForm.status === 'VALID') {
      this.saveprofileData();
      this.route.navigate(['/Profile']);
    }

  }

  saveprofileData() {
    let prof: Profile;
    if (this.isEditMode) {
      prof = {...this.profileForm.value, id:this.currentProfileId};
      console.log("hello");
    } else {
      prof = this.profileForm.value;
    }
    console.log(prof);
    this.profileService.saveProfile(prof).subscribe((data) => {
      console.log("Profile Data");
      this.getDepatmentList();
    });
  }

  getDepatmentList() {
    this.profileService.getDeptList().subscribe((data) => {
      this.departmentlist = data;
    });
  }

  clearForm(){
    this.profileForm.reset();
  }

  onclose() {
    this.close.emit;
  }

}
