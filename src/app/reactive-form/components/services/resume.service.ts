import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resume } from '../models/resume.model'

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  getResumeDetails(id: number): Observable<Resume> {
    return this.http.get<Resume>(`${this.apiLink}/resumes/${id}`);
  }

  saveResumeDetails(resume: Resume): Observable<Resume> {
    return this.http.post<Resume>(`${this.apiLink}/resumes`, resume);
  }

  deleteResumeDetails(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/resumes/${id}`);
  }
}