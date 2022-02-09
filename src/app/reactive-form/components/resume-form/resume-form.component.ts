import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeService } from '../services/resume.service'

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
  resumeService: any;

  buildForm(): void {
    this.resume = this.fb.group({

      Name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(9)]],
      Description: [''],
      Skills: this.fb.array([]),
      
      Experience: this.fb.array([]),

      Education: this.fb.array([]),
      
      Email: ['', Validators.email],
      Mobile: ['', Validators.required],
      
    });
    
  }

  getSkillsArray() {
    return this.resume.controls['Skills'] as FormArray;
  }

  getExperienceArray() {
    return this.resume.controls['Experience'] as FormArray;
  }

  getEducationArray() {
    return this.resume.controls['Education'] as FormArray;
  }

  constructor(private fb: FormBuilder, private route: Router, private resumeservice: ResumeService) { }

  ngOnInit(): void {
    this.buildForm();
    this.addSkills();
    this.addExperience();
    this.addEducation();
    console.log(this.resume);
  }


  skillsField(): FormGroup {
    return this.fb.group({
      Skills: [''],
    })
  }

  experienceField(): FormGroup {
    return this.fb.group({
      Experience: [''],
    })
  }

  educationField(): FormGroup {
    return this.fb.group({
      Education: [''],
    })
  }

  getAsFormGroup(ab: AbstractControl): FormGroup {
    return ab as FormGroup;
  }
  

  getSkillsFormGroup(index: number): FormGroup {
    return this.getSkillsArray().controls[index] as FormGroup;
  }

  addSkills() {
    this.getFormGroupArray('Skills').push(
      this.fb.control('', [Validators.required])
    );
  }

  addEducation() {
    this.getFormGroupArray('Education').push(
      this.fb.group({
        University: ["ABC",[]],
        Degree: ["",[]],
        GPA: [9.0,[]]
      })
    )
  }

  addExperience() {
    this.getFormGroupArray('Experience').push(
      this.fb.group({
        Company: ["",[]],
        JobRole: ["",[]],
        JobDesc: ["",[]],
        JoinYear: [2022,[]],
        LeaveYear: [2022,[]]
      })
    )
    
  }

  getFormGroupArray(formArrayName: string): FormArray {
    return this.resume.controls[formArrayName] as FormArray;
  }

  saveDetails(): void {
    
      
      /*this.resumeService.deleteResumeDetails(1).subscribe(id => {
        this.resumeService.saveResumeDetails(this.resume.value).subscribe(data => {
         
          this.route.navigate(['/resume-builder/view']);
        })
      })
    }*/
  }

  /*deleteSkills(index: number) {
    if (this.Skills.length != 1) {
      this.Skills = this.resume.get('Skills') as FormArray;
      this.Skills.removeAt(index)
    }
    console.log(this.Skills.length)
  }

  deleteExperience(index: number) {
    if (this.Experience.length != 1) {
      this.Experience = this.resume.get('Experience') as FormArray;
      this.Experience.removeAt(index)
    }
    console.log(this.Experience.length)
  }
*/
  deleteEducation(index: number) {
    /*if (this.Education.length != 1)*/ 
      this.getFormGroupArray('Education').removeAt(index);
    
  /*console.log(this.Education.length)*/
  }
}
