import { Component, Input, OnInit, Output, EventEmitter, ComponentRef } from '@angular/core';
import { Department, Profile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import { ProfileFormComponent } from '../profile-form/profile-form.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';


@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  ProfileList= [] as Profile[];
  depts: Department[];
  searchString: string;

  constructor(private profileService: ProfileService, private route: Router, private overlay:Overlay) { }

  ngOnInit(): void {
    this.getProfileList();
    this.getdepartment();
  }

  getdepartment() {
    this.profileService.getDeptList().subscribe((data) => {
      this.depts = data;
    });
  }

  getProfileList() {
    this.profileService.getProfileList().subscribe((data) => {
      this.ProfileList = data;
    }, errors => {
      alert("!Something went wrong!" + errors);
    });
  }
 
  // editProfile(profile: Profile) {
  //   this.profileService.sendProfiletoEdit(profile);
  //   this.route.navigate([`/Profile/edit/${profile.id}`]);
  // }

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

  componentRef: ComponentRef<ProfileFormComponent>;

  displayOverlay(id?: number) {
    console.log("Overlay!!!");

    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerVertically()
        .right()
        .height('100%'),
    });

    const component = new ComponentPortal(ProfileFormComponent);
    this.componentRef = overlayRef.attach(component);

    this.componentRef.instance.submit.subscribe(() => {
      this.getProfileList();
    });

    this.componentRef.instance.currentProfileId = id;

    this.componentRef.instance.close.subscribe(() => {
      overlayRef.detach();
    });
  }

  editProfile(profile: Profile) {
    this.profileService.sendProfiletoEdit(profile);
    this.displayOverlay(profile.id);
    
  }
  

}
