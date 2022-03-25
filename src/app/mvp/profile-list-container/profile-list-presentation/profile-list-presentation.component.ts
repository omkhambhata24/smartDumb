
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Department, Profile } from 'src/app/shared/model/profile.model';
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

  @Input() public set profileList(value: Profile[] | null) {
    if (value) {
      if (this._profileListOriginal == null) {
        this._profileListOriginal = value;
      }

      this._profileList = value;
      console.log(this._profileList);
    }
  }
  public get profileList(): Profile[] | null {
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

  private _profileListOriginal: Profile[] | null = null;
  private _profileList!: Profile[];
  depts: Department[];

  constructor(private profileListPresenter: ProfileListPresenterService,
    private router: Router, private profileFilterService: ProfileListPresenterService,
     private cdr: ChangeDetectorRef) {
      
      // this.getProfileList();
      this.profileListPresenter.filteredData$.subscribe((data : Profile[]) => {
        this._profileList = data;
        // console.log(data);
        this.cdr.markForCheck()
      });
    // this._departmentOptions = new Array<Department>();
    this.delete = new EventEmitter();
    this._searchStr = "";
  }

  ngOnInit(): void {
    // console.log(this._profileList,'hello');
    this.profileListPresenter.delete$.subscribe((id: number) => {
      this.delete.emit(id);

    })
  }

  public onfilter() {
    if (this._profileListOriginal) {
      this.profileFilterService.openFilter(this.departmentOptions, this._profileListOriginal)
    }
  }


  getProfileList() {
    // this.profileService.getProfileList().subscribe((data) => {
    //   this.ProfileList = data;
    //   console.log(data);
    // }, errors => {
    //   alert("!Something went wrong!" + errors);
    // });
  }

  profileTrack(index: number, profile: Profile): number {
    return profile.id;
  }

  onDelete(id: number) {
    this.profileListPresenter.onDelete(id);
  }

  onEdit(id: number) {
    this.router.navigateByUrl(`mvp/edit/${id}`);
  }



  // public openFilter(departmentOptions: Department[] | null){
  // let componentRef: ComponentRef<ProfileFilterPresentationComponent>;
  //   let overlayRef: OverlayRef;
  //   // set overlay config
  //   let overlayConfig: OverlayConfig = new OverlayConfig();
  //   overlayConfig.hasBackdrop = true;
  //   // create overlay reference
  //   overlayRef = this.overlay.create({

  //   positionStrategy: this.overlay
  //   .position()
  //   .global()
  //   .centerVertically()
  //   .right()
  //   .height('100%')
  //   });
  //   const portal: ComponentPortal<ProfileFilterPresentationComponent> = new ComponentPortal<ProfileFilterPresentationComponent>(ProfileFilterPresentationComponent);

  //   // attach overlay with portal
  //   componentRef = overlayRef.attach(portal);
  //   componentRef.instance.departmentOptions = departmentOptions;
  //   // listen to backdrop click
  //   componentRef.instance.emitoverlaydata.subscribe(data => {
  //     console.log(data);
  //   })
  //   componentRef.instance.close.subscribe((res) =>{
  //     overlayRef.detach();
  //   })
  // }


}

