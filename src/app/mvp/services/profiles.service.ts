import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Department, Profile} from '../../shared/model/profile.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class ProfilesService {

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

  public addProf(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(`${this.apiCall}/mvp/`, profile);
  }

  public editProf(profile: Profile): Observable<Profile> {
    console.log('Edit');
    return this.http.put<Profile>(`${this.apiCall}/mvp/${profile.id}`,profile);
  }

  public editProfile(profile: Profile, id: string): Observable<Profile> {
    return this.http.put<Profile>(`${this.apiCall}/profile/${id}`, profile)
  }

  getProfileList(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.apiCall}/profile`);
  }

  getProfileDetail(id: number): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiCall}/profile/${id}`);
  }

  public getProfileId(id: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiCall}/profile/${id}`);
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
