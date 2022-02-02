import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  resume = this.fb.group({

    Name: ['',],
    Skills: ['',],
    Experience: ['',],
    Education: ['',],
    Email: ['', [Validators.email, Validators.required]],
    Mobile: ['', Validators.required],

  });

  get name(): any {
    return this.resume.get('name');
}

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
