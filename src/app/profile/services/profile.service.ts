import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Department, Profile} from '../models/profile.model';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profileToEdit: BehaviorSubject<Profile> = new BehaviorSubject<Profile>({
    "firstName": "",
    "lastName": "",
    "email": "",
    "phone": "",
    "department": 0,
    "gender": "",
    "employment": "",
    "id": 0,
  });

  apiCall = {} as string;

  constructor(private http: HttpClient) {
    this.apiCall = environment.baseURL;
  }

  saveProfile(profile: Profile): Observable<Profile> {
    console.log(profile);
    return profile.id ? this.editProf(profile) : this.addProf(profile);
  }

  private addProf(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(`${this.apiCall}/profile/`, profile);
  }

  private editProf(profile: Profile): Observable<Profile> {
    console.log('Edit');
    return this.http.put<Profile>(`${this.apiCall}/profile/${profile.id}`,profile);
  }

  /*updateProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(`${this.apiCall}/${profile.id}`, profile);
  }*/

  getProfileList(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.apiCall}/profile`);
  }

  getProfileDetail(id: number): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiCall}/employees/${id}`);
  }

  getDeptList(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiCall}/departmentlist`);
  }

  sendProfiletoEdit(profile: Profile): void {
    this.profileToEdit.next(profile)
  }

  getProfileToEdit(): BehaviorSubject<Profile> {
    return this.profileToEdit;
  }

  deleteProfile(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiCall}/profile/${id}`);
  }
}
