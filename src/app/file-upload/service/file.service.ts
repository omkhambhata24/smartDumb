import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Files } from '../model/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private apiUrl: string = "http://localhost:3000/files";
  url:string;

  constructor(private http:HttpClient) { 
    this.url = environment.baseURL;
  }

  getAllFiles(): Observable<Files[]> {
    return this.http.get<Files[]>(this.apiUrl);
  }
  
  addFile(file:any):Observable<any>{
    return this.http.post<any>(`${this.url}/files`,file);
  }

  deleteFile(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
