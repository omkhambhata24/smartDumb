import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Intern } from '../model/intern.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  internForm={} as FormGroup;
  idToEdit: number;
  isEditMode: boolean = false;
  submitted: boolean = false;
  intern: Intern[];

  constructor() { }

  ngOnInit(): void {
  }

}
