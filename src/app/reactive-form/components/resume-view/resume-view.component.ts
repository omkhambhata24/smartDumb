import { Component, OnInit } from '@angular/core';
import { Resume } from '../../models/resume.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.css']
})
export class ResumeViewComponent implements OnInit {

  resumeData: Resume;

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.getResumeData();
  }

  getResumeData(): void {
    this.resumeService.getResume(1).subscribe((data) => {
      this.resumeData = data;
      
    });
  }
}