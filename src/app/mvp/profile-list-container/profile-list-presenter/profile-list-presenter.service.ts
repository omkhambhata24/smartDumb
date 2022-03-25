import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Department, Profile } from 'src/app/shared/model/profile.model';
import { FilterForm } from '../../model/filter.model';
import { ProfileFilterPresentationComponent } from '../profile-list-presentation/profile-filter-presentation/profile-filter-presentation.component';

@Injectable()
export class ProfileListPresenterService {

  private _appliedFilters!: FilterForm | null;
  private delete: Subject<number>;
  public delete$: Observable<number>;


  private _filteredData: Subject<Profile[]>;

  public filteredData$: Observable<Profile[]>;

  overlayRef: OverlayRef;
  
  constructor(private overlay: Overlay) 
  { 
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();

    this._filteredData = new Subject();

    this.filteredData$ = this._filteredData.asObservable();
  }



  public openFilter(departmentOptions: Department[] | null, profileList : Profile[]){
    let componentRef: ComponentRef<ProfileFilterPresentationComponent>;
      let overlayRef: OverlayRef;
      // set overlay config
      let overlayConfig: OverlayConfig = new OverlayConfig();
      overlayConfig.hasBackdrop = true;
      // create overlay reference
      overlayRef = this.overlay.create({
        
      positionStrategy: this.overlay
      .position()
      .global()
      .centerVertically()
      .right()
      .height('100%')
      });
      const portal: ComponentPortal<ProfileFilterPresentationComponent> = new ComponentPortal<ProfileFilterPresentationComponent>(ProfileFilterPresentationComponent);
  
      // attach overlay with portal
      componentRef = overlayRef.attach(portal);
      componentRef.instance.departmentOptions = departmentOptions;
      // listen to backdrop click
      componentRef.instance.emitoverlaydata.subscribe(data => {
        console.log(data);
        this.applyFilters(profileList, data)
        
      })
      componentRef.instance.close.subscribe((res) =>{
        overlayRef.detach();
      })
    }


  public onDelete(id: number) {
    this.delete.next(id);
  }

  // private _filteredData: Subject<Profile[]>;
  // private _filteredData$: Observable<Profile[]>;

  // public get filteredData$(): Observable<Profile[]> {
  //   return this._filteredData$;
  // }

  applyFilters(profileList: Profile[], filter: any): void {
    console.log(filter);
    
    // profileList = profileList.filter(profile => {
    //   console.log(profile.department);
    //   return profile.department == filter.department?.toLowerCase();
    // })
    
    profileList = profileList.filter(profile => {
      console.log(profile.firstName);
      return profile.firstName?.toLowerCase() == filter.firstName?.toLowerCase();
    })
    console.log("filtered",profileList);
    
    this.sendFilteredData(profileList)
    this._filteredData.next(profileList);
  }

  public sendFilteredData(filteredData: Profile[]) {
    this._filteredData.next(filteredData);
  }


  // if(this._appliedFilters){
    //   let firstname = this._appliedFilters.searchBy.firstname.trim();
    //   if (firstname != '') {
    //     profileList = profileList.filter(profile => {
    //       return profile.firstName.includes(firstname);
    //     })
    //   }

    //   let lastname = this._appliedFilters.searchBy.firstname.trim();
    //   if (lastname != '') {
    //     profileList = profileList.filter(profile => {
    //       return profile.lastName.includes(lastname);
    //     })
    //   }
  
    //   let email = this._appliedFilters.searchBy.email.trim();
    //   if (email != '') {
    //     profileList = profileList.filter(profile => {
    //       return profile.email.includes(email);
    //     })
    //   }
  
    //   let mobile = this._appliedFilters.searchBy.mobile.trim();
    //   if (mobile != '') {
    //     profileList = profileList.filter(profile => {
    //       return profile.phone.includes(mobile);
    //     })
    //   }
    // }



}
