import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent implements OnInit {

  resume: FormGroup;
  Skills: FormArray;
  Experience: FormArray;
  Education: FormArray;

  buildForm(): void {
    this.resume = this.fb.group({

    Name: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(9)]],
    Description: [''],
    Skills: this.fb.array([
      this.skillsField() 
    ]),

    Experience: this.fb.array([
      this.experienceField()
    ]),

    Education: this.fb.array([
      this.educationField()
    ]),

    Email: ['', Validators.email],
    Mobile: ['', Validators.required],

   });
  }

  getSkillsArray() {
    return this.resume.controls['Skills'] as FormArray;
  }

  getExperienceArray() {
    return this.resume.controls['Experiences'] as FormArray;
  }

  getEducationArray() {
    return this.resume.controls['Education'] as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }


  skillsField(): FormGroup {
    return this.fb.group({
      Skills: '',
    })
  }

  experienceField(): FormGroup {
    return this.fb.group({
      Experience: '',
    })
  }

  educationField(): FormGroup {
    return this.fb.group({
      Education: '',
    })
  }

  addSkills() {
    this.Skills = this.resume.get('Skills') as FormArray;
    this.Skills.push(this.skillsField())
  }

  addEducation() {
    this.Education = this.resume.get('Education') as FormArray;
    this.Education.push(this.educationField())
  }

  addExperience() {
    this.Experience = this.resume.get('Experience') as FormArray;
    this.Experience.push(this.experienceField())
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
      this.Education = this.resume.get('Education') as FormArray;
      this.Education.removeAt(index)
    }
    console.log(this.Education.length)
  }
}
