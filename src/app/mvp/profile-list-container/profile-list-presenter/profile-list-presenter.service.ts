import { OverlayRef } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Profile } from 'src/app/shared/model/profile.model';
import { FilterForm } from '../../model/filter.model';

@Injectable()
export class ProfileListPresenterService {

  private _appliedFilters!: FilterForm | null;
  private delete: Subject<number>;
  public delete$: Observable<number>;

  overlayRef: OverlayRef;
  
  constructor() 
  { 
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();

    this._filterData = new Subject();
    this._filterData$ = this._filterData.asObservable();
  }


  public onDelete(id: number) {
    this.delete.next(id);
  }

  private _filterData: Subject<Profile[]>;
  private _filterData$: Observable<Profile[]>;

  public get filterData$(): Observable<Profile[]> {
    return this._filterData$;
  }

  applyFilters(profileList: Profile[]): void {
    if(this._appliedFilters){
      let firstname = this._appliedFilters.searchBy.firstname.trim();
      if (firstname != '') {
        profileList = profileList.filter(profile => {
          return profile.firstName.includes(firstname);
        })
      }

      let lastname = this._appliedFilters.searchBy.firstname.trim();
      if (lastname != '') {
        profileList = profileList.filter(profile => {
          return profile.lastName.includes(lastname);
        })
      }
  
      let email = this._appliedFilters.searchBy.email.trim();
      if (email != '') {
        profileList = profileList.filter(profile => {
          return profile.email.includes(email);
        })
      }
  
      let mobile = this._appliedFilters.searchBy.mobile.trim();
      if (mobile != '') {
        profileList = profileList.filter(profile => {
          return profile.phone.includes(mobile);
        })
      }
    }
    this._filterData.next(profileList);
  }
}
