import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProgressFormPresenterService {

  constructor(private formBuilder: FormBuilder) { }

//   personalDetails = this.formBuilder.group({
//     name: ['', Validators.required],
//     email: ['', Validators.required],
//     phone: ['', Validators.required]
//   });

// addressDetails = this.formBuilder.group({
//   city: ['', Validators.required],
//   address: ['', Validators.required],
//   pincode: ['', Validators.required]
// });

// educationalDetails = this.formBuilder.group({
//   highest_qualification: ['', Validators.required],
//   university: ['', Validators.required],
//   total_marks: ['', Validators.required]
// });
}
