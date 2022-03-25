import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Department, Profile } from 'src/app/shared/model/profile.model';
import { ProfileFilterPresentationComponent } from './profile-filter-presentation/profile-filter-presentation.component';
import { ProfileListPresenterService } from '../profile-list-presenter/profile-list-presenter.service';

@Component({
  selector: 'app-profile-list-presentation',
  templateUrl: './profile-list-presentation.component.html',
  styleUrls: ['./profile-list-presentation.component.scss'],
  viewProviders: [ProfileListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileListPresentationComponent implements OnInit {


  private _searchStr: string;
  public set searchStr(val: string) {
    this._searchStr = val;
  }
  public get searchStr(): string {
    return this._searchStr;
  }

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

  private _departmentOptions: Department[];
  @Input() public set departmentOptions(val: Department[] | null) {
    if (val) {
      this._departmentOptions = val;
    }
  }
  public get departmentOptions(): Department[] {
    return this._departmentOptions;
  }

  @Output() public delete: EventEmitter<number>;
  @Output() public cancel: EventEmitter<number>;

  private _profileList!: Profile[];
  depts: Department[];

  constructor(private profileListPresenter: ProfileListPresenterService,
    private router: Router, private overlay: Overlay ,private profileFilterService:ProfileListPresenterService,private cdr:ChangeDetectorRef)
   { 
    // this._departmentOptions = new Array<Department>();
    this.delete = new EventEmitter();
    this._searchStr = "";
   }

  ngOnInit(): void {
    this.getProfileList();
    this.profileListPresenter.delete$.subscribe((id: number) => {
      this.delete.emit(id);

      this.profileListPresenter.filterData$.subscribe(data => {
        this._profileList = data;
        console.log(data);
      });
    })

   

  }

  public onfilter() {
    this.openFilter(this.departmentOptions);
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

  onEdit(id: number) {
    this.router.navigateByUrl(`mvp/edit/${id}`);
  }



  public openFilter(departmentOptions: Department[] | null){
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
    })
    componentRef.instance.close.subscribe((res) =>{
      overlayRef.detach();
    })
  }

    
}

