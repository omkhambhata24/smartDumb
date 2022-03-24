import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Department, Profile } from 'src/app/shared/model/profile.model';
import { ProfilesService } from '../services/profiles.service';

@Component({
  selector: 'app-profile-list-container',
  templateUrl: './profile-list-container.component.html',
  styleUrls: ['./profile-list-container.component.scss']
})
export class ProfileListContainerComponent implements OnInit {

  public ProfileList$: Observable<Profile[]>;
  
  private _departmentOptions$: Observable<Department[]>;
  public get departmentOptions$() {
    return this._departmentOptions$;
  }

  constructor(private profileService: ProfilesService) 
  { 
    this._departmentOptions$ = this.profileService.getDeptList();
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
