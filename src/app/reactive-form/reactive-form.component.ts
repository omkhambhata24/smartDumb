import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  resume: FormGroup;
  Skills: FormArray;
  Experience: FormArray;
  Education: FormArray;

  buildForm(): void {
    this.resume = this.fb.group({

    Name: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(9)]],
    Skills: this.fb.array([
      this.dynamicField()
    ]),

    Experience: this.fb.array([
      this.dynamicField()
    ]),

    Education: this.fb.array([
      this.dynamicField()
    ]),

    Email: ['', [Validators.email, Validators.required]],
    Mobile: ['', Validators.required],

  });



  
}

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  dynamicField(): FormGroup {
    return this.fb.group({
      Skills: [''],
      Education: [''],
      Experience:['']
    })
  }

  addSkills() {
    this.Skills = this.resume.get('skills') as FormArray;
    this.Skills.push(this.dynamicField())
  }

  addEducation() {
    this.Education = this.resume.get('Education') as FormArray;
    this.Education.push(this.dynamicField())
  }

  addExperience() {
    this.Experience = this.resume.get('Experience') as FormArray;
    this.Experience.push(this.dynamicField())
  }

  saveDetails() {
    console.log(this.resume.value)
  }

  deleteSkills(index:number){
    if(this.Skills.length !=1){
      this.Skills = this.resume.get('Skills') as FormArray;
      this.Skills.removeAt(index)
    }
    console.log(this.Skills.length)
  }

  deleteExperience(index:number){
    if(this.Experience.length !=1){
      this.Experience = this.resume.get('Experience') as FormArray;
      this.Experience.removeAt(index)
    }
    console.log(this.Experience.length)
  }

  deleteEducation(index:number){
    if(this.Education.length !=1){
      this.Education = this.resume.get('Skills') as FormArray;
      this.Education.removeAt(index)
    }
    console.log(this.Education.length)
  }

}
