import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  ProfileList= [] as Profile[];
  SearchTerm: string;

  constructor(private profileService: ProfileService, private route: Router) { }

  ngOnInit(): void {
    this.getProfileList();
  }

  getProfileList() {
    this.profileService.getProfileList().subscribe((data) => {
      this.ProfileList = data;
    }, errors => {
      alert("!Something went wrong!" + errors);
    });
  }
 
  editProfile(profile: Profile) {
    this.profileService.sendProfiletoEdit(profile);
    this.route.navigate([`/Profile/edit/${profile.id}`]);
  }

  deleteProfile(id : number){
    this.profileService.deleteProfile(id).subscribe((data) => {
      console.log("Deleted successfully: ", data);
      this.getProfileList();
    }, errors => {
      alert("Wrong" + errors);
    });

  }

  profileTrack(index: number, profile: Profile ) {
    return profile.id;
  }
}
