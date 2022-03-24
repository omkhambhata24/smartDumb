import { Injectable } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { Department } from 'src/app/shared/model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileFilterPresenterService {

  filterForm:FormGroup;
  constructor(private fb: FormBuilder) { 
    // this.filterForm = this.generatedFilterForm(depart)
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
}
