import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department, Profile } from 'src/app/shared/model/profile.model';
import { ProfilesService } from '../services/profiles.service';

@Component({
  selector: 'app-profile-form-container',
  templateUrl: './profile-form-container.component.html',
  styleUrls: ['./profile-form-container.component.scss']
})
export class ProfileFormContainerComponent implements OnInit {

  public id!: string;
  public profileData$: Observable<Profile>

  private _departmentOptions$: Observable<Department[]>;
  public get departmentOptions$() {
    return this._departmentOptions$;
  }


  constructor(private profileService: ProfilesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) 
    {
    this._departmentOptions$ = this.profileService.getDeptList();
    this.profileData$ = new Observable();
    console.log(this.activatedRoute)
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)

    if (this.id) {
      this.profileData$ = this.profileService.getProfileId(this.id);
    }
   }

  ngOnInit(): void {
  }

  addProfile(profileForm: Profile) {
    this.profileService.addProf(profileForm).subscribe(
      (res: any) => {
        alert('Added successfully')
        this.router.navigateByUrl('mvp/list');
      }
    );
  }

  editProfile(profileForm: Profile) {
    this.profileService.editProfile(profileForm,this.id).subscribe(
      (res: any) => {
        alert('Editted successfully')
        this.router.navigateByUrl('mvp/list');
      }
    );
  }

}
