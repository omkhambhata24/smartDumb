import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  ProfileList= {} as Profile[];


  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getProfileList();
  }

  getProfileList() {
    this.profileService.getProfileList().subscribe((data) => {
      this.ProfileList = data;
    }, errors => {
      alert("Something went wrong!! - emp" + errors);
    });
  }
 
  editProfile(){

  }

  deleteProfile(){

  }

  profileTrack(index: number, profile: Profile ) {
    return profile.id;
  }
}
