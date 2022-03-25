import { Injectable } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { FilterForm } from 'src/app/mvp/model/filter.model';
import { Department } from 'src/app/shared/model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileFilterPresenterService {

  private _filterForm: Subject<FilterForm>;
  private _filterForm$: Observable<FilterForm>;
  public get filterForm$(): Observable<FilterForm> {
    return this._filterForm$;
  }

  filterForm:FormGroup;
  constructor(private fb: FormBuilder) { 
    this._filterForm = new Subject();
    this._filterForm$ = this._filterForm.asObservable();
    
  }

  generatedFilterForm(departmentOptions: Department[]): FormGroup{
    return this.fb.group({
    
    firstName: [''],
    lastName: [''],
    email: [''],
    department: [0],
    gender:[''],
    phone: [''],
    })
  }

  onfilter(filteredData: FilterForm): void {
    this._filterForm.next(filteredData);
  }
}
