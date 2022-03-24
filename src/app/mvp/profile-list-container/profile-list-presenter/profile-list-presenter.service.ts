import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Profile } from 'src/app/shared/model/profile.model';
import { FilterForm } from '../../model/filter.model';

@Injectable()
export class ProfileListPresenterService {

  private _appliedFilters!: FilterForm | null;
  private delete: Subject<number>;
  public delete$: Observable<number>;

  constructor() 
  { 
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();

    this._filteredData = new Subject();
    this._filteredData$ = this._filteredData.asObservable();
  }


  public onDelete(id: number) {
    this.delete.next(id);
  }

  private _filteredData: Subject<Profile[]>;
  private _filteredData$: Observable<Profile[]>;

  public get filteredData$(): Observable<Profile[]> {
    return this._filteredData$;
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

      console.log(profileList);
    }
    this._filteredData.next(profileList);
  }
}
