import { OverlayRef } from '@angular/cdk/overlay';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterForm } from 'src/app/mvp/model/filter.model';
import { Department } from 'src/app/shared/model/profile.model';
import { ProfileFilterPresenterService } from '../profile-filter-presenter/profile-filter-presenter.service';

@Component({
  selector: 'app-profile-filter-presentation',
  templateUrl: './profile-filter-presentation.component.html',
  styleUrls: ['./profile-filter-presentation.component.scss']
})
export class ProfileFilterPresentationComponent implements OnInit {

  public filterForm = {} as FormGroup;
  @Output() emitoverlaydata: EventEmitter<FilterForm>;
  // @Output() filter : EventEmitter<Event>;
  @Output() close: EventEmitter<Event>;

  private _departmentOptions: Department[];
  @Input() public set departmentOptions(val: Department[] | null) {
    if (val) {
      console.log('val', val);
      this._departmentOptions = val;
    }
  }

  public get departmentOptions(): Department[] {
    return this._departmentOptions;
  }

  constructor(private router: Router,
    private ProfileFilterPresenterService: ProfileFilterPresenterService) {
    this.close = new EventEmitter;

    this.emitoverlaydata = new EventEmitter<FilterForm>();
    this.filterForm = this.ProfileFilterPresenterService.generatedFilterForm();
  }

  ngOnInit(): void {
    //  this.ProfileFilterPresenterService.filterForm$.subscribe(data => {
    //   this.emitoverlaydata.emit(data)
    //  })
  }

  onclose() {
    this.close.emit();
  }

  onfilter() {
    // console.log(this.filterForm.value);
    
    this.ProfileFilterPresenterService.onfilter(this.filterForm.value);
    this.onclose()
    this.emitoverlaydata.emit(this.filterForm.value)
    console.log(this.filterForm.value);
    



  }


}
