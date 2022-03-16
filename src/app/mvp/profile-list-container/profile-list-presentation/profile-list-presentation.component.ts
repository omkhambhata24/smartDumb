import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/shared/model/profile.model';

@Component({
  selector: 'app-profile-list-presentation',
  templateUrl: './profile-list-presentation.component.html',
  styleUrls: ['./profile-list-presentation.component.scss']
})
export class ProfileListPresentationComponent implements OnInit {

  ProfileList= [] as Profile[];

  constructor() { }

  ngOnInit(): void {
  }

  profileTrack(index: number, profile: Profile ): number {
    return profile.id;
  }

}
