import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/shared/model/profile.model';
import { ProfileFormPresenterService } from '../../profile-form-container/profile-form-presenter/profile-form-presenter.service';
import { ProfilesService } from '../../services/profiles.service';
import { ProfileListPresenterService } from '../profile-list-presenter/profile-list-presenter.service';

@Component({
  selector: 'app-profile-list-presentation',
  templateUrl: './profile-list-presentation.component.html',
  styleUrls: ['./profile-list-presentation.component.scss'],
  viewProviders: [ProfileFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileListPresentationComponent implements OnInit {


  @Input() public set profileList(value : Profile[] | null) {
    // console.log(value);
    if (value) {
      this._profileList = value;
      console.log(this._profileList);
    }
  }
  public get profileList() : Profile[] | null {
    return this._profileList;
  }

  @Output() public delete: EventEmitter<number>;

  private _profileList!: Profile[];

  constructor(private profileListPresenter: ProfileListPresenterService,
    private router: Router)
   { 
    this.delete = new EventEmitter();
   }

  ngOnInit(): void {
    this.getProfileList();
  }

  getProfileList() {
    // this.profileService.getProfileList().subscribe((data) => {
    //   this.ProfileList = data;
    //   console.log(data);
    // }, errors => {
    //   alert("!Something went wrong!" + errors);
    // });
  }

  profileTrack(index: number, profile: Profile ): number {
    return profile.id;
  }

  onDelete(id: number) {
    this.profileListPresenter.onDelete(id);
  }


}
