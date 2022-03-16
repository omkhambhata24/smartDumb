import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Department } from 'src/app/shared/model/profile.model';
import { ProfileFormPresenterService } from '../profile-form-presenter/profile-form-presenter.service';

@Component({
  selector: 'app-profile-form-presentation',
  templateUrl: './profile-form-presentation.component.html',
  styleUrls: ['./profile-form-presentation.component.scss'],
  viewProviders: [ProfileFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileFormPresentationComponent implements OnInit {

  profileForm={} as FormGroup;
  departmentlist?: Department[];

  constructor(private ProfileFormPresenter: ProfileFormPresenterService,
    private location: Location) { }

  ngOnInit(): void {
  }

  onclose() { }

  clearForm() { }

  onsubmit() {
    this.ProfileFormPresenter.onsubmit(this.profileForm)
  }

  saveProfile() { }

}
