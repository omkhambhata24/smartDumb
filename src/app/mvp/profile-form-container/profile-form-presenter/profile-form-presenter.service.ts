import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Profile } from 'src/app/shared/model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileFormPresenterService {

  private profileFormData: Subject<Profile>;
  public profileFormData$: Observable<Profile>;

  constructor(private fb: FormBuilder) { 
    this.profileFormData = new Subject();
    this.profileFormData$ = this.profileFormData.asObservable();
  }


  buildProfileForm() {
    return this.fb.group({

      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.email]],
      phone:['',[Validators.pattern(/\([0-9]{3}\)-\([0-9]{3}\)-[0-9]{4}$/),Validators.required]],
      department: [''],
      gender: ['',Validators.required],
      employment: ['', Validators.required],
      
    });
  }

  onsubmit(profileForm: FormGroup) {
    if (!profileForm.valid) {
      return
    }

    this.profileFormData.next(profileForm.value);
  }
}
