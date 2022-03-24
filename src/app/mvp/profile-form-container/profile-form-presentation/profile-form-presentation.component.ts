import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Department, Profile } from 'src/app/shared/model/profile.model';
import { ProfileFormPresenterService } from '../profile-form-presenter/profile-form-presenter.service';

@Component({
  selector: 'app-profile-form-presentation',
  templateUrl: './profile-form-presentation.component.html',
  styleUrls: ['./profile-form-presentation.component.scss'],
  viewProviders: [ProfileFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileFormPresentationComponent implements OnInit {

  @Input() public set profileData(value : Profile | null) {
    // console.log(value);
    if (value) {
      console.log(value)
      this.formTitle = 'Edit Customer';
      // this.customerForm.controls['age'].disable();
      console.log(this.profileForm)

      this.profileForm.patchValue(value);
      this._profileData = value;
    }
  }
  public get profileData() : Profile | null {
    return this._profileData;
  }
  
  private _profileData!: Profile;

  @Output() public add: EventEmitter<Profile>;
  @Output() public edit: EventEmitter<Profile>

  public profileForm={} as FormGroup;
  public formTitle: string;

  constructor(private ProfileFormPresenter: ProfileFormPresenterService, private router: Router) {
      this._departmentOptions = new Array<Department>(); 
      this.profileForm = this.ProfileFormPresenter.buildProfileForm();
      this.add = new EventEmitter();
      this.edit = new EventEmitter();
      this.formTitle = 'Add Customer'
    }

  ngOnInit(): void {
    this.ProfileFormPresenter.profileFormData$.subscribe((res: Profile) => {
      this.formTitle === 'Add Customer' ? this.add.emit(res) : this.edit.emit(res);;
    })
  }

  private _departmentOptions: Department[];
  @Input() public set departmentOptions(val: Department[] | null) {
    if (val) {
      console.log(val);
      this._departmentOptions = val;
    }
  };

  public get departmentOptions(): Department[] {
    return this._departmentOptions;
  }

  onclose() { 
    this.router.navigateByUrl('/mvp/list');
  }

  clearForm() { 
    this.profileForm.reset();
  }

  onsubmit() {
    this.ProfileFormPresenter.onsubmit(this.profileForm)
  }

  saveProfile() { }

}
