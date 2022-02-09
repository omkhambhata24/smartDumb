import { Component, OnInit } from '@angular/core';
import { Resume } from '../models/resume.model';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.css']
})
export class ResumeViewComponent implements OnInit {

  resume: Resume;

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.getResume();
  }

  getResume(): void {
    this.resumeService.getResumeDetails(1).subscribe((data) => {
      this.resume = data;
      
    });
  }
}