import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  DetailsForm={} as FormGroup;
  isEditMode: boolean = false;
  idToEdit!: number;

  constructor(private formBuilder: FormBuilder, private detailsService: DetailsService) { }

  ngOnInit(): void {
    this.buildProfileForm();

    this.detailsService.editDetails$.subscribe((oldData) => {
      this.isEditMode = true;
      this.DetailsForm.patchValue(oldData);
      this.idToEdit = oldData.id;
    });
  }

  buildProfileForm() {
    this.DetailsForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.email]],
    });
  }

  onSubmit() {
    if (this.DetailsForm.valid) {
      if (this.isEditMode) {
        this.detailsService.editDetails({...this.DetailsForm.value, id: this.idToEdit})
      } else {
        this.detailsService.addDetails(this.DetailsForm.value)
      }
      this.DetailsForm.reset();
    }
  }

}
