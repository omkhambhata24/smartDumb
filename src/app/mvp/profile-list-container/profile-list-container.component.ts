import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/shared/model/profile.model';
import { ProfilesService } from '../services/profiles.service';

@Component({
  selector: 'app-profile-list-container',
  templateUrl: './profile-list-container.component.html',
  styleUrls: ['./profile-list-container.component.scss']
})
export class ProfileListContainerComponent implements OnInit {

  public ProfileList$: Observable<Profile[]>;
  

  constructor(private profileService: ProfilesService) 
  { 
    this.ProfileList$ = new Observable();
  }

  ngOnInit(): void {
    this.ProfileList$ = this.profileService.getProfileList();
  }

  delete(id: number) {
    this.profileService.deleteProfile(id).subscribe((res: any) => {
      console.log(res);
      this.ProfileList$ = this.profileService.getProfileList();
    });
  }

}
